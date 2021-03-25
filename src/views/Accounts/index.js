import React, {useState, useEffect} from "react";
import {Row, Col, Input, message, Modal, Button, Select, Table, Divider, Form} from "antd";
import {CardBody, CardHeader} from 'reactstrap';
import {DeleteOutlined, EditOutlined, ExclamationCircleOutlined} from "@ant-design/icons";
import {createAccount, deleteAccount, updateAccount, getAccount} from "../../actions";

const {confirm} = Modal;

message.config({
  top: 100,
});

const Accounts = () => {
  const [accData, setAccData] = useState({
    acc_id: "",
    access_from: "",
    dev_name: "",
    email: "",
    mobile_number: "",
    password: "",
    status: ""
  });
  const [isEditAccount, setEditAccount] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [submitLoad, setSubmitLoad] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [show, setShow] = useState(false);
  const [error, setError] = useState({})
  const {Option} = Select;
  const statusList = ['LIVE', 'TERMINATED'];
  const columns = [
    {
      title: "UID",
      key: "acc_id",
      dataIndex: "acc_id",
      sorter: (a, p) => toString(a.acc_id).toLowerCase().localeCompare(toString(p.acc_id).toLowerCase()),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, p) => toString(a.email).toLowerCase().localeCompare(toString(p.email).toLowerCase()),
    },
    {
      title: "MobileNo",
      key: "mobile_number",
      dataIndex: "mobile_number",
      sorter: (a, p) => toString(a.mobile_number).toLowerCase().localeCompare(toString(p.mobile_number).toLowerCase()),
    },
    {
      title: "Password",
      key: "password",
      dataIndex: "password",
      sorter: (a, p) => toString(a.password).toLowerCase().localeCompare(toString(p.password).toLowerCase()),
    },
    {
      title: "AccessFrom",
      key: "access_from",
      dataIndex: "access_from",
      sorter: (a, p) => toString(a.access_from).toLowerCase().localeCompare(toString(p.access_from).toLowerCase()),
    },
    {
      title: "DevName",
      key: "dev_name",
      dataIndex: "dev_name",
      sorter: (a, p) => toString(a.dev_name).toLowerCase().localeCompare(toString(p.dev_name).toLowerCase()),
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      sorter: (a, p) => toString(a.status).toLowerCase().localeCompare(toString(p.status).toLowerCase()),
    },
    {
      title: "Action",
      key: "action",
      render: (record, data, index) => (
        <span>
                        <EditOutlined
                          theme="filled"
                          className="cus-btn"
                          onClick={() => onEdit(record)}
                          style={{color: "blue"}}
                        />&nbsp;&nbsp;
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

  useEffect(() => {
    getAccounts();
  }, []);

  const getAccounts = async () => {
    setLoading(true);
    const res = await getAccount();
    if (res && res.data) {
      setTableData(res.data.payload);
    }
    setLoading(false)
  };

  const handleChange = ({target: {name, value}}) => {
    setAccData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const onEdit = record => {
    if (!show) {
      setShow(!show);
    }
    setEditAccount(true);
    setAccData(record);
  };

  const showConfirm = (record) => {
    confirm({
      title: 'Do you Want to delete this Account?',
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
  }

  const onDelete = async (record) => {
    const res = await deleteAccount(record._id);
    if (res) {
      if (res.success) {
        message.success("Account successfully deleted!");
      }
      if (res.error) {
        message.error(res.error);
      }
      await getAccounts();
    }
  };

  const Validation = (name, value) => {
    switch (name) {
      case "acc_id":
        if (!value) {
          return "Account id is required"
        } else {
          return null
        }
      case "access_from":
        if (!value) {
          return "Access from is required"
        } else {
          return null
        }
      case "email":
        if (!value) {
          return "Email is required"
        } else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
          return "Enter valid email"
        } else {
          return null
        }
      case "mobile_number":
        if (!value) {
          return "Mobile number is required"
        } else {
          return null
        }
      case "password":
        if (!value) {
          return "Password is required"
        } else {
          return null
        }
      case "dev_name":
        if (!value) {
          return "Dev name is required"
        } else {
          return null
        }
      case "status":
        if (!value) {
          return "Status is required"
        } else {
          return null
        }
      default:
        return  null
    }
  }

  const onAddAccount = async () => {
    setSubmitLoad(true);
    const data = {
      acc_id: accData.acc_id || "",
      access_from: accData.access_from || "",
      dev_name: accData.dev_name || "",
      email: accData.email,
      mobile_number: accData.mobile_number || "",
      password: accData.password || "",
      status: accData.status || ""
    }
    let AllError = {};
    Object.keys(data).forEach(key => {
      const error = Validation(key, accData[key]);
      if (error) {
        AllError[key] = error
      }
    });
    if (Object.keys(AllError).length) {
      setError(AllError)
      return
    }
    if (isEditAccount) {
      const res = await updateAccount(accData._id, accData);
      if (res && res.data && !res.error) {
        setShow(!show);
        setEditAccount(!isEditAccount);
        if (res.success) {
          message.success("Account successfully Updated!");
        }
        if (res.error) {
          message.error(res.error);
        }
        await getAccounts();
      } else {
        return message.error(res.error);
      }
    } else {
      const res = await createAccount(accData);
      if (res && res.data && !res.error) {
        setShow(!show);
        await getAccounts();
      }
      if (res.success) {
        setSubmitLoad(false);
        message.success("Account successfully Created!");
      }
      if (res.error) {
        message.error(res.error);
      }
    }
    setError({})
  };

  const onReset = () => {
    setShow(false)
    setError({})
    setAccData({});
  };

  const oCreateAccount = () => {
    setEditAccount(false)
    setShow(true)
    setAccData({});
    setShow(!show);
  };

  return (
    <div style={{border: "1px solid #c8ced3"}}>
      <card>
        {
          !show &&
          <CardHeader >
            <div className="d-flex justify-content-between">
              <h4>Accounts</h4>
              <div>
                <Button
                  type="primary"
                  onClick={oCreateAccount}
                >
                  Add Account
                </Button>
              </div>
            </div>
          </CardHeader>
        }
        { show &&
        <CardBody>
          <div className="animated fadeIn">
            <Form
              layout="vertical"
            >
              <Row>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="UID">
                    <Input
                      value={accData.acc_id || ""}
                      placeholder="Enter Account ID"
                      name="acc_id"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.acc_id}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="Email">
                    <Input
                      value={accData.email || ""}
                      placeholder="Enter Email"
                      name="email"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.email}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="MobileNo">
                    <Input
                      value={accData.mobile_number || ""}
                      placeholder="Enter mobile number"
                      name="mobile_number"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.mobile_number}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="Password">
                    <Input
                      value={accData.password || ""}
                      placeholder="Enter password"
                      name="password"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.password}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="Access From">
                    <Input
                      value={accData.access_from || ""}
                      placeholder="Enter Access From"
                      name="access_from"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.access_from}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="Dev Name">
                    <Input
                      value={accData.dev_name || ""}
                      placeholder="Enter Dev Name"
                      name="dev_name"
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error.dev_name}</span>
                  </Form.Item>
                </Col>
                <Col className="col-12 col-sm-12 col-md-4">
                  <Form.Item label="Status">
                    <Select
                      showSearch
                      placeholder="Select Status"
                      optionFilterProp="children"
                      onChange={v => handleChange({target: {name: 'status', value: v}})}
                      value={accData.status || ''}
                      defaultActiveFirstOption={false}
                      filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="">Select</Option>
                      {
                        statusList.map((value, index) => (
                          <Option value={value} key={index}>{value}</Option>
                        ))
                      }
                    </Select>
                    <span className="text-danger">{error.status}</span>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
          {
            show &&
            <Row style={{margin: 10}} className="float-right">
              <Col>
                <Button
                  type="danger"
                  onClick={onReset}
                >Cancel
                </Button>
              </Col>
              <Col style={{marginLeft: 5}}>
                <Button
                  type="primary"
                  onClick={onAddAccount}
                  loading={submitLoad}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          }
        </CardBody>
        }
      </card>
      {
        show &&  <Divider/>
      }
      <div style={{margin:32}}>
        <Table
          rowKey={record => record._id}
          dataSource={tableData}
          columns={columns}
          pagination={{pageSize: 10}}
          loading={isLoading}
        />
      </div>
    </div>
  );
};


export default Accounts;
