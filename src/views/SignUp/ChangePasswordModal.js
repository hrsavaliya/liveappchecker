import React from "react"
import {Card, Checkbox, Form, Input, Modal, Select} from "antd";
import {LockOutlined, MailOutlined} from "@ant-design/icons";

const ChangePasswordModal = ({isModalVisible,onSubmitPassword,handleCancel,passwordData,onChangePassword,roleData}) => {
  return(
    <Modal
      title="Change Password"
      centered={true}
      visible={isModalVisible}
      onOk={() => {onSubmitPassword()}}
      onCancel={handleCancel}
    >
      <Card>
        <Form>
          <Form.Item>
            <span className="font-weight-bold">New Email</span>
            <Input
              type="email"
              placeholder="Enter Your New Email"
              name="email"
              value={passwordData.email || ""}
              onChange={onChangePassword}
              addonBefore={(<MailOutlined/>)}/>
          </Form.Item>
          <Form.Item>
            <span className="font-weight-bold">New Password</span>
            <Input
              type="password"
              placeholder="Enter Your New PassWord"
              name="password"
              value={passwordData.password || ""}
              onChange={onChangePassword}
              addonBefore={(<LockOutlined/>)}/>
          </Form.Item>
          <Form.Item>
            <span className="font-weight-bold">Select Role</span><br/>
            <Select value={passwordData.role || ''} onChange={(value) => {onChangePassword( {target: {name: "role",  value}})}} style={{width: 150}} placeholder="Select Role">
              {
                (roleData || []).map((value, index) => (
                  <Select.Option key={index} value={value.role}>{value.role}</Select.Option>
                ))
              }
            </Select>
          </Form.Item>
          <Form.Item>
            <Checkbox name="isActive" checked={passwordData.isActive} onChange={event => onChangePassword(event)}>
              isActive
            </Checkbox>
          </Form.Item>
        </Form>
      </Card>
    </Modal>
  )
};

export default ChangePasswordModal
