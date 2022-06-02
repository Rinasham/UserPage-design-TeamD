import React from "react";
import ReactDOM from "react-dom";
import { Container } from "semantic-ui-react";
import { Name } from "./Name";
import { History } from "./History";

import styles from "./userPage.module.css";

const App = () => (
  <Container className={styles.container}>
    <h1 className={styles.title}>Your Account</h1>
    <Name />
    <History />
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(<App />, document.getElementById("root"));
