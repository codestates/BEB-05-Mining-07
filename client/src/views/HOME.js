import React from "react";
import Home_NFT from "./Home_NFT";

import { Container, Button } from "shards-react";

const Home = () => {
  return (
    <Container fluid className="main-content-container px-4 pb-4">
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
            Discover, collect, and sell extraordinary NFTs
          </h1>
        </div>
        <div className="description-box">
          <p
            className="description"
            style={{
              fontSize: "20px",
              textAlign: "center",
              lineHeight: "1",
              margin: "45px 0 130px 0"
            }}
          >
            OpenSea is the world's first and largest NFT marketplace
          </p>
        </div>
        <div className="button-box" style={{ textAlign: "center" }}>
          <Button
            className="bg-primary text-white text-center rounded p-3 "
            style={{
              boxShadow: "inset 0 0 5px rgba(0,0,0,.2)",
              width: "120px",
              margin: "0 30px 0 0"
            }}
          >
            Explore
          </Button>
          <Button
            className="bg-primary text-white text-center rounded p-3 "
            style={{
              boxShadow: "inset 0 0 5px rgba(0,0,0,.2)",
              width: "120px"
            }}
          >
            Create
          </Button>
        </div>
        <Home_NFT />
      </div>
    </Container>
  );
};

export default Home;
