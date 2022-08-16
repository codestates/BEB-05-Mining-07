import React from "react";
import PropTypes from "prop-types";
import { Navbar, NavbarBrand, Button } from "shards-react";

import { Dispatcher, Constants } from "../../../flux";

class SidebarMainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    Dispatcher.dispatch({
      actionType: Constants.TOGGLE_SIDEBAR
    });
  }

  render() {
    const { hideLogoText } = this.props;
    return (
      
      <div className="main-navbar">
        <Navbar
          className="align-items-stretch bg-white flex-md-nowrap"
          type="light"
        >
          <Button  theme="primary" className="mb-2 mr-1" style={{marginTop:5}}>Connect Wallet</Button>
          <NavbarBrand
            className="w-100 mr-0"
            href="#"
            style={{ lineHeight: "25px" }}
          >
            <div className="d-table m-auto">
              <img
                id="main-logo"
                className="d-inline-block align-top mr-1"
                style={{ maxWidth: "25px" }}
                src={require("./../../../images/content-management/open-sea-logo.png")}
                alt="Shards Dashboard"
              />
              {!hideLogoText && (
                <span className="d-none d-md-inline ml-1">
                  Mining_NFTMarKet
                </span>
              )}
            </div>
            
          </NavbarBrand>
          
          {/* eslint-disable-next-line */}
          <a
            className="toggle-sidebar d-sm-inline d-md-none d-lg-none"
            onClick={this.handleToggleSidebar}
          >
            <i className="material-icons">&#xE5C4;</i>
          </a>
        </Navbar>
      </div>
    );
  }
}

SidebarMainNavbar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

SidebarMainNavbar.defaultProps = {
  hideLogoText: false
};

export default SidebarMainNavbar;
