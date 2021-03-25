import React from "react"
import {Button, Card, Form, Input, Row, Select} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";

const CreateUser = ({showForm, setShowForm, signUpData, handleChange, roleData,onSubmit}) => {
  return (
      showForm && (
      <Card
        className="create-user"
        title="Create Your Account"
        extra={
          <a role="button"
             style={{color: "red"}}
             onClick={() => {
               setShowForm(false)
             }}
          >
            Cancel
          </a>
        }
      >
        <Form>
          <Form.Item>
            <span className="font-weight-bold">Name</span>
            <Input
              placeholder="Enter Your Name"
              name="name"
              value={signUpData.name}
              onChange={handleChange}
              addonBefore={(<UserOutlined/>)}
            />
          </Form.Item>
          <Form.Item compact rules={[{type: 'email'}]}>
            <span className="font-weight-bold">Email</span>
            <Input
              placeholder="Enter Your Email"
              name="email"
              value={signUpData.email}
              onChange={handleChange}
              addonBefore={<MailOutlined/>}/>
          </Form.Item>
          <Form.Item>
            <span className="font-weight-bold">Password</span>
            <Input.Password
              placeholder="Enter Your PassWord"
              name="password"
              id="password"
              value={signUpData.password}
              onChange={handleChange}
              addonBefore={(<LockOutlined/>)}
            />
          </Form.Item>
          <Form.Item>
            <span className="font-weight-bold">Role</span><br/>
            <Select onChange={(value) => {
              handleChange({target: {name: "role", value}})
            }} style={{width: 150}} placeholder="Select Role">
              {
                roleData.map((value, index) => (
                  <Select.Option key={index} value={value.role}>{value.role}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              disabled={!(signUpData.email && signUpData.password && signUpData.name && signUpData.role)}
              htmlType="submit"
              onClick={onSubmit}
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
      </Card>
    )
)
};

export default CreateUser
