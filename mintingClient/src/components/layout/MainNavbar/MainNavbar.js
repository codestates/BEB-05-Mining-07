import React from "react";
import { Container, Navbar, Button, NavItem} from "shards-react";

export default class MainNavbar extends React.Component{
  constructor(props) {
    super(props);
    this.ConnectionWallet = this.ConnectionWallet.bind(this);
  }

   //connection wallet 비동기 지갑 처리 
   ConnectionWallet() {
    const accounts =  window.ethereum.request({
        method: "eth_requestAccounts",
    });
    console.log(accounts[0])
  }

  render (){
    return(
    <div className="main-navbar bg-white sticky-top">
      <Container className="">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0" style={{display:"block"}}>
            <div  className="mb-2" style={{marginTop:10, float:"right"}}>
              <Button onClick={this.ConnectionWallet} theme="primary">Connect Wallet</Button>
            </div>
        </Navbar>
      </Container>
    </div>
    );
  }
};
