import React from "react";
import Details from "../components/common/Details";
import { Container, Row, Col } from "shards-react";
import Description from "../components/blog/Description";
import Properties from "../components/common/Properties";
import NFT_info_img from "../components/common/NFT_info_img";
import NFT_info_name from "../components/common/NFT_nfo_name";
const NFT_TEST_PAGE2 = () => (
  <Container fluid className="main-content-container px-4">
    <div
      style={{
        display: "block",
        borderBottom: "2px solid #e5e8eb",
        padding: "10px"
      }}
    >
      <h1>NFT info</h1>
    </div>
    <Container
      fluid
      className="main-content-container px-4"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div className="area1" style={{ margin: "0 70px 0 0" }}>
        <NFT_info_img />
        <Row>
          <Col lg="15" md="12" sm="12" className="mb-4">
            <Details />
          </Col>
        </Row>
      </div>
      <div className="area2">
        <NFT_info_name />
        <Description />
        <Properties />
      </div>
    </Container>
  </Container>
);

export default NFT_TEST_PAGE2;
