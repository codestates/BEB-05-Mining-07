import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({ children, web3 }) => (
  <Container fluid>
    <MainNavbar />
    {children}
    <MainFooter />
  </Container>
);

export default DefaultLayout;
