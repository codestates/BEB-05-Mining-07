/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";

const Home_NFT = () => {
  const PostsListFour = [
    {
      backgroundImage: require("../images/content-management/7.jpeg"),
      profile_image: require("../images/content-management/7.jpeg"),

      author: "Mining",
      name: "Mining_NFT12"
    }
  ];
  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <div style={{ display: "inline-block", marginTop: "170px" }}>
        {PostsListFour.map((post, idx) => (
          <div key={idx}>
            <div
              small
              className="card-post "
              style={{
                borderRadius: "10px",
                position: "relative",
                width: "700px",
                height: "600px",
                cursor: "pointer",
                boxShadow: "rgb(0 0 0 / 30%) 0 2px 50px"
              }}
            >
              <div
                className="card-post__background"
                style={{
                  backgroundImage: `url('${post.backgroundImage}')`,
                  height: "500px"
                }}
              />
              <div className="cardBox" style={{ display: "flex" }}>
                <div
                  className="profile_image"
                  style={{
                    backgroundImage: `url('${post.profile_image}')`,
                    width: "60px",
                    height: "60px",
                    borderRadius: "50px",
                    margin: "20px 0 0 15px"
                  }}
                />
                <div
                  className="name_author"
                  style={{ textAlign: "left", margin: "20px 0 0 0" }}
                >
                  <h5
                    className="card-title"
                    style={{
                      paddingLeft: "10px",
                      fontSize: "15px",
                      fontWeight: "700"
                    }}
                  >
                    {post.name}
                    <h6 style={{ color: "#2081e2" }}>{post.author}</h6>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home_NFT;
