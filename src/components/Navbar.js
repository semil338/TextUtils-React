import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function BootstrapNav(props) {
  return (
    <Navbar bg={props.mode} variant={props.mode} expand="sm">
      <Container fluid>
        <Link to="/" style={{ textDecorationLine: "none" }}>
          <Navbar.Brand>{props.title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </Nav>
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Dark Mode"
              onClick={props.toggleMode}
              className={`text-${props.mode === "light" ? "dark" : "light"}`}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

BootstrapNav.propTypes = {
  title: PropTypes.string.isRequired,
};

BootstrapNav.defaultProps = {
  title: "TextUtils",
};
