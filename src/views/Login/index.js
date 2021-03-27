import React, {useState} from 'react';
import {message} from 'antd';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import {login} from "../../actions";

const LogIn = (props) => {

  const [loginData, setLoginData] = useState({});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setLoginData({...loginData, [name]: value});
    if (event.keyCode === 13) {
      onLogin();
    };
  };

  const onLogin = async () => {
    const res = await login(loginData);
    if (res && res.data && res.data.success) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("_id",JSON.stringify(res.data.login));
      props.history.push("/grab-data");
    } else {
      message.error("User not Found")
    }
  };

  const onSignUp = () => {
    props.history.push('/users');
  };

  const onForgotPassword = () => {
    props.history.push('/forget-password')
  };

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Email" name="email" value={loginData.email || ""}
                             onChange={handleChange}/>
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"/>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" name="password" value={loginData.password || ""}
                             onChange={handleChange} onKeyDown={handleChange}/>
                    </InputGroup>
                    <Row>
                      <Col xs="2">
                        <Button color="primary"  className="px-4" disabled={!(loginData.email && loginData.password)}
                                onClick={onLogin}>Login</Button>
                      </Col>
                      <Col xs="5" className='text-right'>
                        <Button  color="link" className="px-6" onClick={onForgotPassword}>Forgot Password?</Button>
                      </Col>
                      <Col xs="5"  className='text-center'>
                        <Button  style={{ marginLeft: 75}} className="px-4" disabled color='link' onClick={onSignUp}>SignUp</Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default LogIn;
