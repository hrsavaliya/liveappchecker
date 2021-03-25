import React, {useState} from "react";
import {Button, Form, message, Input, Table, Modal, Col, Row} from "antd";
import {createRole, deleteRole} from "../../actions";
import {DeleteOutlined, ExclamationCircleOutlined} from "@ant-design/icons";

const {confirm} = Modal;

const Roles = ({roleData, fetchRoles,setLoading}) => {

  const [role, setRole] = useState('');

  const onHandleChange = (e) => {
    setRole(e.target.value)
  };

  const showConfirm = (record) => {
    confirm({
      title: 'Do you Want to delete this App?',
      icon: <ExclamationCircleOutlined/>,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        onDelete(record);
      },
      onCancel() {
      },
    });
  };

  const onDelete = async (record) => {
    const res = await deleteRole(record._id);
    if (res) {
      if (res.success) {
        setRole('')
        message.success("App successfully deleted!");
        await fetchRoles();
      }
      if (res.error) {
        message.error(res.error);
      }
    }
  };

  const columns = [
    {
      title: "Role ",
      key: "role",
      dataIndex: "role",
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

  const onSubmit = async () => {
    setLoading(true);
    const res = await createRole({role});
    if (res && res.data) {
      message.success("Created");
      await fetchRoles();
      setLoading(false)
    } else {
      message.error("something went wrong");
      setLoading(false)
    }
  };

  return (
    <>
      <Row>
        <Col span={6}>
          <Form.Item>
            <Input value={role} placeholder="Enter Roles" onChange={onHandleChange} name="role"/>
          </Form.Item>
        </Col>
        <Col span={3}>
          <Button type="primary" disabled={!role} onClick={onSubmit}>Submit</Button>
        </Col>
      </Row>
      <Table
        rowKey={record => record._id}
        dataSource={roleData}
        columns={columns}
        pagination={{pageSize: 5}}
      />
    </>
  );
};
export default Roles;
