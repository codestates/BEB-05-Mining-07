import React from "react";
import Web3 from "web3";
import { NavItem, NavLink, Badge, Collapse, DropdownItem, Button } from "shards-react";

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

   //connection wallet 비동기 지갑 처리 
   ConnectionWallet() {
    const accounts =  window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(accounts[0])
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <NavItem className="border-right dropdown notifications">
        <Button onClick={this.ConnectionWallet} theme="primary" className="mb-2 mr-1" style={{marginTop:5}}>Connect Wallet</Button>
        <Collapse
          open={this.state.visible}
          className="dropdown-menu dropdown-menu-small"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE6E1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Analytics</span>
              <p>
                Your website’s active users count increased by{" "}
                <span className="text-success text-semibold">28%</span> in the
                last week. Great job!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="material-icons">&#xE8D1;</i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category">Sales</span>
              <p>
                Last week your store’s sales count decreased by{" "}
                <span className="text-danger text-semibold">5.52%</span>. It
                could have been worse!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem className="notification__all text-center">
            View all Notifications
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
