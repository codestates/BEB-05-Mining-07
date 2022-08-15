import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "shards-react";

import { Col } from "shards-react";
const Properties = ({ title }) => (
  <Card
    small
    style={{ height: "250px", width: "700px", margin: "20px 50px 30px 15px" }}
  >
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Col className="mb-4">
        <div
          className=" text-black text-center rounded p-3 "
          style={{
            boxShadow: "inset 0 0 5px rgba(0,0,0,.2)",
            width: "100px",
            backgroundColor: "#EDF8FE"
          }}
        >
          Item
        </div>
      </Col>
    </CardBody>
  </Card>
);

Properties.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

Properties.defaultProps = {
  title: "Properties "
};

export default Properties;
