import React, {useState} from 'react';
import {Button, Card, Col, Form, Input, message, Row} from "antd";
import {setNewPassword} from "../../actions";

const NewPassword = (props) => {

  const [password, setPassword] = useState('');

  const userId = props.match && props.match.params && props.match.params.id || "";

  const handleChange = (event) => {
    const {value} = event.target;
    setPassword(value);
  };

  const onSubmit = async () => {
    const res = await setNewPassword(userId, password);
    if (res && res.data) {
      props.history.push("/login");
      message.success("Your password Changed Successfully")
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
            <h2 style={{textAlign: "center"}}>New Password</h2><br/>
            <Form>
              <Form.Item>
                <Input
                  placeholder="Enter Your New Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
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

export default NewPassword;
