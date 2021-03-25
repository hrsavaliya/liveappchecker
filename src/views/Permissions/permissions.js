import React, {useEffect, useState} from "react";
import _ from "lodash"
import {Button, Switch, Form, Select, List, message, Col, Row, Input} from "antd";
import {Label} from "reactstrap";
import { updatePermissions,createPermission,getPermission} from "../../actions";

message.config({
  top: 50,
});


const Permissions = ({roleData,fetchRoles,isLoading}) => {
  const [permission, setPermission] = useState([]);
  const [selectedUserRoleDetails, setSelectedUserRoleDetails] = useState({});
  const [enterPermission,setEnterPermission] = useState("");
  const [loading,setLoading] = useState(false);
  const [permissionPagesList,setPermissionPagesList] = useState([]);

  useEffect(() => {
    getPermissions();
  },[]);

  const onChange = (e) => {
    setSelectedUserRoleDetails({});
    let {name, value} = e.target;
    setPermission({...permission, [name]: value});
    const selectedUserType = Array.isArray(roleData) && roleData.find(v => v.role === value );
    setSelectedUserRoleDetails(selectedUserType || {})
  };

  const onPermissionDataChange = (e) => {
    setEnterPermission({});
    let {name, value} = e.target;
    setEnterPermission({...enterPermission, [name]: value});
  };

  const onPermissionChange = (item) => {
    const isExist = selectedUserRoleDetails.permission.includes(item.permission);
    if (!isExist) {
      setSelectedUserRoleDetails({
        ...selectedUserRoleDetails,
        permission: [...selectedUserRoleDetails.permission, item.permission]
      })
    } else {
      const updated = selectedUserRoleDetails.permission.filter(v => v !== item.permission);
      setSelectedUserRoleDetails({...selectedUserRoleDetails, permission: updated})
    }
  };

  const getPermissions = async () => {
    setLoading(true)
    const res = await getPermission();
    if(res && res.data) {
      setPermissionPagesList(res.data);
      setLoading(false)
    } else {
      message.error("Something Went Wrong");
    }
  }

  const onSubmit = async () => {
    setLoading(true);
    const res = await updatePermissions(selectedUserRoleDetails);
    if (res && res.data && !res.error) {
      if (res.success) {
        message.success("Successfully Updated!");
        await fetchRoles();
        setLoading(false)
      }
    } else {
      setLoading(false);
      message.error(res.error);
    }
  };

  const submitPermission  = async () => {
    setLoading(true)
    const res = await createPermission(enterPermission);
    if(res && res.data && !res.error) {
      if(res.success) {
        message.success("Successfully inserted Permission!");
        setLoading(false);
      }
    }else {
      setLoading(false);
      message.error(res.error);
    }
  };

  return (
    <>
      <Form layout="vertical">
        <Row>
          <Col span={6}>
            <Label className="font-bold">Enter Permissions :</Label>
            <Row>
              <Col span={12}>
            <Form.Item>
              <Input  onChange={onPermissionDataChange}  placeholder="Enter Permissions" name="permission" />
            </Form.Item>
              </Col>
              <Col offset={1}>
                <Button onClick={submitPermission} disabled={!enterPermission} type="primary">Add</Button>
              </Col>
            </Row>
            <Form.Item label="User Type" className="font-bold">
            <Select onChange={(value) => {
              onChange({target: {name: "role", value: value}})
            }} placeholder="Select User Type">
              {
                (roleData || []).map((role, index) =>
                  <Select.Option key={index} value={role.role}>{role.role}</Select.Option>
                )
              }
            </Select>
          </Form.Item>
          </Col>
          <Col span={14} offset={1}>
            <Label className="font-bold">Permissions :</Label>
            <List
              size="large"
              bordered
              style={{width: "75%"}}
              dataSource={permissionPagesList}
              renderItem={item =>
                <List.Item style={{padding: "9px 24px"}} aria-disabled="true">
                  <Row>
                    <Col style={{width: 350}}>{item.permission}</Col>
                    <Col>
                      <Switch
                        disabled={_.isEmpty(selectedUserRoleDetails)}
                        checked={(!_.isEmpty(selectedUserRoleDetails) && selectedUserRoleDetails.permission || []).includes(item.permission)}
                        onChange={(value) => {
                          onPermissionChange(item, value)
                        }}
                      />
                    </Col>
                  </Row>
                </List.Item>
              }
            />
          </Col>
          <Col span={3}>
            <Button onClick={onSubmit} type="primary"  disabled={_.isEmpty(selectedUserRoleDetails)} loading={isLoading}>Save</Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
export default Permissions;
