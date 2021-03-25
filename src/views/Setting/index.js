import React, {useEffect, useState} from "react";
import {Button, Input, message, Select, Modal, Row, Col, Form, Table, Tabs, Spin} from "antd";
import {DeleteOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import {createSetting, deleteSettingData, getRoles, getSettingAllData} from "../../actions";
import Permissions from "../Permissions/permissions";
import { UsergroupAddOutlined,CheckOutlined,SettingOutlined  } from '@ant-design/icons';
import Roles from "../Roles";

const { TabPane } = Tabs;

const setting = () => {
  const[dynamic,setDynamic]=useState({});
  const [tableData, setTableData] = useState([]);
  const [roleData, setRolesData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect( () => {
      fetchApps();
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
  const fetchApps = async () => {
    const res = await getSettingAllData();
    if (res && res.data ) {
      setTableData(res.data || []);
    }
  };

  const showConfirm = (record) => {
    Modal.confirm({
      title: 'Do you Want to delete this App?',
      icon: <ExclamationCircleOutlined/>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(record);
      },
      onCancel() {},
    });
  };

  const onDelete = async (record) => {
    const res = await deleteSettingData(record._id);
    if (res && res.success) {
      await fetchApps();
      message.success("App successfully deleted!");
    }
  };

  const columns = [
    {
      title: "Setting Data",
      key: "key",
      dataIndex: "key",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <span>
          <DeleteOutlined
            theme="filled"
            className="cus-btn"
            onClick={() => showConfirm(record)}
            style={{color: "red"}}
          />
          </span>
      )
    }
  ];

  const handleChange = (e) => {
    setDynamic({...dynamic, [e.target.name]: e.target.value})
  };

  const mySubmit = async () => {
    const res = await createSetting(dynamic);
    if (res && res.data) {
      message.success("success")
    } else {
      message.error("something went wrong")
    }
    const response = await getSettingAllData();
    if (response && response.data) {
      setTableData(response.data);
    }
    setDynamic({})
  };

  return (
    <>
      <Spin spinning={isLoading}>
      <Tabs defaultActiveKey="1">
        <TabPane tab={<span><UsergroupAddOutlined />Roles</span>} key="1">
          <Roles roleData={roleData} fetchRoles={fetchRoles} setLoading={setLoading} isLoading={isLoading}/>
        </TabPane>
        <TabPane tab={<span><CheckOutlined />Permission</span>} key="2">
          <Permissions roleData={roleData} fetchRoles={fetchRoles} setLoading={setLoading} isLoading={isLoading}/>
        </TabPane>
        <TabPane tab={<span><SettingOutlined />Settings</span>} key="3" setLoading={setLoading} isLoading={isLoading}>
          <div>
            <Row>
              <Col md={6}>
                <Form.Item>
                  <Input value={dynamic.searchData} placeholder="Enter Data..." onChange={handleChange} name="searchData"/>
                </Form.Item>
              </Col>
              <Col md={2}>
                <Button type="primary" disabled={!dynamic.searchData} onClick={mySubmit}>Submit</Button>
              </Col>
            </Row>
          </div>
          <Table
            rowKey={record => record._id}
            dataSource={tableData}
            columns={columns}
            pagination={{pageSize: 5}}
          />
        </TabPane>
      </Tabs>
      </Spin>
    </>
  );
}
export default setting;
