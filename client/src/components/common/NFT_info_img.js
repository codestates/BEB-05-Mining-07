import React from "react";
import { Card, CardHeader, CardBody } from "shards-react";

const NFT_info_img = () => (
  <Card
    small
    style={{ height: "600px", width: "700px", margin: "20px 50px 30px 15px" }}
  >
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <img
        style={{ width: "15px" }}
        src={require("../common/img/eth.png")}
        alt="test"
      />
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <img
        style={{ width: "100%", height: "100%" }}
        src={require("../common/img/eth.png")}
        alt="test"
      />
    </CardBody>
  </Card>
);

export default NFT_info_img;
