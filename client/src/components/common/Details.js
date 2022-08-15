import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "shards-react";

const Details = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
            <span className="text-semibold text-fiord-blue">{item.title}</span>
            <span className="ml-auto text-right text-semibold text-reagent-gray">
              {item.value}
            </span>
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  </Card>
);

Details.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

Details.defaultProps = {
  title: "Details",
  referralData: [
    {
      title: "Contract Address",
      value: ""
    },
    {
      title: "Token ID",
      value: ""
    },
    {
      title: "Token Standard",
      value: "ERC-721"
    },
    {
      title: "Blockchain",
      value: "Ropsten"
    },
    {
      title: "Creator Fees",
      value: "10%"
    }
  ]
};

export default Details;
