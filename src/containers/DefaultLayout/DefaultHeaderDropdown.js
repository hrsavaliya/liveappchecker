import React, { Component } from 'react';
import { Badge, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

class DefaultHeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  dropSettings() {
    const {history,onLogout} = this.props;
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={'assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"/> Profile</DropdownItem>
          <DropdownItem onClick={() => {history.push('/setting')}}><i className="fa fa-wrench"/> Settings</DropdownItem>
          <DropdownItem onClick={() => {history.push('/users')}}><i className="fa fa-user"/> Users</DropdownItem>
          <DropdownItem><i className="fa fa-file"/> Projects<Badge color="primary">42</Badge></DropdownItem>
          <DropdownItem onClick={onLogout}><i className="fa fa-lock"/> Logout</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }


  render() {
    return (
        this.dropSettings()
    );
  }
}

export default DefaultHeaderDropdown;
