import React, {useState, useEffect} from 'react';
import _ from 'lodash'
import {Row, Col, Button, message, Table, Checkbox, Spin} from "antd";
import {setNewPassword, getUserList, signUp, updateStatus, getRoles} from "../../actions";
import ChangePasswordModal from "./ChangePasswordModal";
import CreateUser from "./CreateUser";

message.config({
  top: 50,
});

const SignUp = () => {
  const [signUpData, setSignUpData] = useState({});
  let [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [roleData, setRolesData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [passwordData, setPasswordData] = useState({});

  useEffect(() => {
    fetchUserList();
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    setLoading(true);
    const res = await getRoles();
    if (res && res.data) {
      setRolesData(res.data || []);
      setLoading(false)
    }else {
      setLoading(false)
    }
  };

  const onChangePassword = (event) => {
    const {name, value, checked} = event.target;
    if (name === 'isActive') {
      setPasswordData({...passwordData, [name]: checked});
    } else {
      setPasswordData({...passwordData, [name]: value});
    }
  };

  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignUpData({...signUpData, [name]: value});
  }

  const onSubmit = async () => {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(signUpData.email)) {
      return message.error("Please enter valid email")
    }
    signUpData.isActive = true;
    setLoading(true);
    const res = await signUp(signUpData);
    if (res && res.data && res.data.users && res.data.users._id) {
      message.success("Successfully Register");
      fetchUserList();
      setSignUpData({});
      setShowForm(false);
      setLoading(false)
    } else if (res && res.data.message) {
      setLoading(false)
      message.error(res.data.message)
    } else {
      message.error("Something went wrong")
    }
  }

  const handleUpdateStatus = async (id, status) => {
    setLoading(true);
    const res = await updateStatus(id, status);
    if (res && res.data) {
      message.success("Updated");
      fetchUserList();
    } else {
      setShowForm(false);
      message.error("Something went wrong")
    }
  }

  const onSubmitPassword = async () => {
    if (!_.isEmpty(passwordData) && passwordData.password && passwordData.email) {
      setLoading(true);
      const res = await setNewPassword(passwordData);
      if (res && res.data && res.data.ok) {
        setIsModalVisible(false);
        setPasswordData({});
        setLoading(false);
        fetchUserList();
        message.success("Updated");
      } else {
        setLoading(false);
        message.error("something went wrong")
      }
    } else {
      message.error("Please required all field");
    }
  };

  const fetchUserList = async () => {
    setLoading(true);
    const res = await getUserList();
    if (res && res.data && res.data.role !== "superAdmin") {
      setData(res.data || [])
      setLoading(false)
    } else {
      message.error("Something went wrong")
      setLoading(false)
    }
  }

  const changePassword = (record) => {
    setIsModalVisible(true);
    setPasswordData({...record, password:''})
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const T = 'Are you sure to delete this task?';

  const columns = [
    {
      title: 'ID',
      key: '_id',
      render: (text, record, index) => (
        <span>{index + 1}</span>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Active',
      key: 'appId',
      render: (record,data,index) => (
        <Checkbox
          key={index}
          checked={record.isActive}
          onChange={() => {handleUpdateStatus(record._id, record.isActive)}}
        />
        )
    },
    {
      title: 'Change Password',
      dataIndex: 'id',
      render: (text, record,index) => (
        <>
          <Button key={index} type="primary" onClick={() => {changePassword(record)}}>
            Change
          </Button>
        </>
      )
    }
  ];

  return (
    <>
      <Spin spinning={isLoading}>
        <ChangePasswordModal
          isModalVisible={isModalVisible}
          onSubmitPassword={onSubmitPassword}
          handleCancel={handleCancel}
          passwordData={passwordData}
          onChangePassword={onChangePassword}
          roleData={roleData}
        />
        <Row className="account-form">
          {
            !showForm && (
              <Col span={3}>
                <Button type="primary" htmlType="submit" onClick={() => {
                  setShowForm(true)
                }} className="add-account">
                  Create Account
                </Button>
              </Col>
            )
          }
          <CreateUser
            showForm={showForm}
            setShowForm={setShowForm}
            signUpData={signUpData}
            handleChange={handleChange}
            roleData={roleData}
            onSubmit={onSubmit}
          />
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={{pageSize: 5}}
              rowKey={'key'}
            />
          </Col>
        </Row>
      </Spin>
    </>
  )
};

export default SignUp;
