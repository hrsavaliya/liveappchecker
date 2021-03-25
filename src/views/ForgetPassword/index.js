import React, {useState} from 'react'
import {Button, Card, Col, Form, Input, message, Row} from "antd";
import {MailOutlined} from "@ant-design/icons";
import {forgotPassword} from "../../actions";

const ForgetPassword = (props) => {

  const [email, setEmailId] = useState("");

  const handleChange = (event) => {
    const {value} = event.target;
    setEmailId(value);
  }

  const onSubmit = async () => {
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(email)) {
      return message.error("Plz enter valid email")
    }
    const res = await forgotPassword(email);
    if (res && res.data) {
      props.history.push("/login");
      message.success("Please Check your mail and reset your password")
    } else {
      message.error("Something went wrong")
    }
  };

  return (
    <>
      <Row style={{marginTop: 100}}>
        <Col span={8}/>
        <Col span={8}>
          <Card>
            <h2 style={{textAlign: "center"}}>Forgot Password</h2>
            <p style={{textAlign: "center"}}>Generate your new password</p><br/>
            <Form>
              <Form.Item
                compact
                rules={[{type: 'email'}]}
              >
                <Input placeholder="Enter Your EmailId" name="email" value={email}
                       onChange={handleChange} addonBefore={<MailOutlined/>}/>
              </Form.Item>

              <Form.Item style={{textAlign: "center"}}>
                <Button type="primary" htmlType="submit" onClick={onSubmit}>
                  Submit
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

export default ForgetPassword;
