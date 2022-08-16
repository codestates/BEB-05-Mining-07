import React from "react";
import Home_NFT from "./Home_NFT";
import erc721Abi from "./../ERC721";
import axios from 'axios';

import { Container, Button } from "shards-react";

export default class Home extends React.Component  {
  constructor(props) {
    super(props);
    
    this.AirDrop = this.AirDrop.bind(this);
  }

  // Airdrop 
  AirDrop() {
    const accounts =  window.ethereum.request({
      method: "eth_requestAccounts",
    });
    
    accounts.then(result =>{
      this.ContractCall_airDrop(result)
    })
    
  }
  // contract call 
  ContractCall_airDrop(addr)
  {
    const url = `http://localhost:8001/getdice`
    const response =  axios.get(url).then((res)=>{
      const contractAddr = "0x0Cb722e2305257d4c28e4e37408a538cB0a1eB42";
      const instance = new this.props.web3.eth.Contract(erc721Abi,contractAddr)
      const diceNumber = res.data.data;
      instance.methods.safeMint(addr[0],diceNumber).call().then(result => {
        console.log(result);
        alert("민팅 성공!");
      });
     
    })
  }
  


  render() {
    return (
      <Container fluid className="main-content-container px-4 pb-4">
      <div style={{marginTop:10, textAlign:"center"}}>
        <img
          id="main-logo"
          className="d-inline-block align-top mr-1"
          style={{display:"block"}}
          src={require("./../images/content-management/minting-lofo-removebg-preview.png")}
          alt="Shards Dashboard"
        />
        </div>
      <div className="title" style={{ marginTop: "7%" }}>
        <div className="heading-box">
          <h1
            className="heading"
            style={{
              fontSize: "40px",
              fontWeight: "700",
              textAlign: "center",
              lineHeight: "1.2"
            }}
          >
            Free AirDrop Minging Market NFTs
          </h1>
        </div>
        <div className="description-box">
          <p
            className="description"
            style={{
              fontSize: "20px",
              textAlign: "center",
              lineHeight: "1",
              margin: "45px 0 50px 0"
            }}
          >
            1. Connect your metamask wallet <br/><br/>
            2. Click the "AirDrop" button
          </p>
    
        </div>
        <div className="button-box" style={{ textAlign: "center" }}>
          <Button
            onClick={this.AirDrop}
            className="bg-success text-white text-center rounded p-3 "
            style={{
              boxShadow: "inset 0 0 5px rgba(23,198,113,1)",
              width: "120px",
              margin: "0 30px 0 0"
            }}
          >
            AirDrop
          </Button>
        </div>
        <Home_NFT />
      </div>
    </Container>

    );
  }

}
