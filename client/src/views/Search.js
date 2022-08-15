import React from "react";
import Collections from "./Collections";
import { Container } from "shards-react";

const Search = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <div>
      <div>
        <h1
          className="head-text"
          style={{
            fontSize: "50px",
            fontWeight: "600",
            margin: "10px 0 30px 0"
          }}
        >
          Search
        </h1>
      </div>
      <div
        className="tap-box"
        style={{
          display: "flex",
          justifyContent: "leftr",
          height: "50px",
          borderBottom: "2px solid #e5e8eb"
        }}
      >
        <div
          className="tap-box-wrapper"
          style={{
            display: "flex",
            margin: "0 0 0 30px",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <span
            className="tab-box-text"
            style={{ fontWeight: "400", textAlign: "center", fontSize: "30px" }}
          >
            All
          </span>
          <div
            className="tab-underline"
            style={{
              width: "100px",
              height: "5px",
              borderRadius: "2px",
              backgroundColor: "#2081e2"
            }}
          />
        </div>
      </div>
      <div>
        <Collections />
      </div>
    </div>
  </Container>
);

export default Search;
