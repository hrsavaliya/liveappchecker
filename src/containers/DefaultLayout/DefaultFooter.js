import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <span> All copyrights reserved ©  2020.</span>
        <span className="ml-auto">
          Powered by<a href="http://bvminfotech.com/" target="_blank" rel="noopener noreferrer"> BVM Infotech</a>
        </span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
