import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import PropTypes from 'prop-types';
import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown  from './DefaultHeaderDropdown'
import logo from "../../assets/img/bvmlogo.png";
import miniLogo from "../../assets/img/favicon.ico";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 120, height: 60, alt: "BVM Logo" }}
          minimized={{ src: miniLogo, width: 30, height: 30, alt: "BVM Logo" }}
        />
        <Nav className="ml-auto" navbar>
          <DefaultHeaderDropdown onLogout={this.props.onLogout} {...this.props} />
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
