import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Web3 from "web3";
import { useState } from "react";
import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";

function App() {
  const [web3, setWeb3] = useState(); 
  useEffect(() => { // 처음 컴포넌트가 마운트 되었을때만 실행 
      if (typeof window.ethereum !== "undefined") { // window.ethereum이 있다면
          try {
              const web = new Web3(window.ethereum);  // 새로운 web3 객체를 만든다
              console.log(web);
              setWeb3(web); // web3 객체 업데이트
          } catch (err) {
              console.log(err);
          }
          
      }
  }, []);

  return (

    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
  
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              return (
                <route.layout web3={web3} {...props}>
                  <route.component web3={web3} {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
  )
}
export default App;