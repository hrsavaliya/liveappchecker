import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, message, Row} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {changedPassword} from "../../actions";

const ChangePassword = (props) => {

  const [passwordData, setPasswordData] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setPasswordData({...passwordData, [name]: value});
  };

  const onSubmit = async () => {
    const res = await changedPassword(passwordData);
    if (res && res.data) {
      localStorage.setItem('token', "");
      props.history.push("/login");
      message.success("Your password updated successfully")
    } else {
      message.error("something went wrong")
    }
  };

  return (
    <>
      <Row style={{marginTop: 100}}>
        <Col span={8}/>
        <Col span={8}>
          <Card>
            <Form>
              <Form.Item>
                <Input
                  type="password"
                  placeholder="Enter Your Current Password"
                  name="password"
                  value={passwordData.password || ""}
                  onChange={handleChange}
                  addonBefore={(<LockOutlined/>)}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  type="password"
                  placeholder="Enter Your New PassWord"
                  name="new"
                  value={passwordData.new || ""}
                  onChange={handleChange}
                  addonBefore={(<LockOutlined/>)}/>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" onClick={onSubmit}>
                  Update
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col span={8}/>
      </Row>
    </>
  )
}

export default ChangePassword;
