import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

function About() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <Container style={myStyle}>
      <h2 className="my-2">About Us</h2>
      <Accordion defaultActiveKey="0" style={myStyle}>
        <Accordion.Item eventKey="0" style={myStyle}>
          <Accordion.Header style={{ color: "red" }}>
            Accordion Item #1
          </Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header style={myStyle}>Accordion Item #2</Accordion.Header>
          <Accordion.Body style={myStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Button variant="primary" className="my-3" onClick={toggleStyle}>
        {btnText}
      </Button>
    </Container>
  );
}

export default About;
