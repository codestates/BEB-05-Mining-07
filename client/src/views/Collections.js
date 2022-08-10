import React from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";

const Collections = () => {
  const PostsListOne = [
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Non-Fungible"
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Cyber"
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "goblin"
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "Meta_K"
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Non-Fungible"
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Cyber"
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "goblin"
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "Meta_K"
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Non-Fungible"
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Cyber"
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "goblin"
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "Meta_K"
    },
    {
      backgroundImage: require("../images/content-management/1.jpeg"),
      authorAvatar: require("../images/avatars/1.jpg"),
      title: "Non-Fungible"
    },
    {
      backgroundImage: require("../images/content-management/2.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "Cyber"
    },
    {
      backgroundImage: require("../images/content-management/3.jpeg"),
      authorAvatar: require("../images/avatars/2.jpg"),
      title: "goblin"
    },
    {
      backgroundImage: require("../images/content-management/4.jpeg"),
      authorAvatar: require("../images/avatars/3.jpg"),
      title: "Meta_K"
    }
  ];

  return (
    <div className="main-content-container px-4">
      <Row style={{ margin: "50px 0 0 0", cursor: "pointer" }}>
        {PostsListOne.map((post, idx) => (
          <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
            <Card small className="card-post card-post--1">
              <div
                className="card-post__image"
                style={{ backgroundImage: `url(${post.backgroundImage})` }}
              >
                <div className="card-post__author d-flex">
                  <div
                    className="card-post__author-avatar card-post__author-avatar--small"
                    style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                  ></div>
                </div>
              </div>
              <CardBody>
                <h5 className="card-title">{post.title}</h5>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Collections;
