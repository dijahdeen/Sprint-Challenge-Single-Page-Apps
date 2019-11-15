import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import Styled from 'styled-components';


const Page = Styled.div`
 background-color: pink;
`
ReactDOM.render(
  <Router>
    <Page>
      <App />
    </Page>
  </Router>,
  document.getElementById("root")
);
