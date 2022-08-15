import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader } from "shards-react";
import { Button } from "shards-react";

const NFT_info_name = ({ title }) => (
  <Card
    small
    style={{
      height: "50px",
      width: "700px",
      margin: "20px 50px 40px 15px"
    }}
  >
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h6 className="m-0" style={{ fontWeight: "50px", fontSize: "30px" }}>
          {title}
        </h6>
        <Button size="md" theme="primary" className="mb-2 mr-1">
          Sell
        </Button>
      </div>
    </CardHeader>
  </Card>
);

NFT_info_name.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NFT_info_name.defaultProps = {
  title: "My Mining"
};

export default NFT_info_name;
