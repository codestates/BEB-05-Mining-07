import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "shards-react";

const Description = ({ title }) => (
  <Card
    small
    style={{ height: "250px", width: "700px", margin: "20px 50px 30px 15px" }}
  >
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <span>This is Mining_Market NFT</span>
    </CardBody>
  </Card>
);

Description.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Description.defaultProps = {
  title: "Description"
};

export default Description;
