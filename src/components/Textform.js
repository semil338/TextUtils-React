import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function BootstrapForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClear = () => {
    setText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleRemoveExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <Container
        className="my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <Form>
          <Form.Group className="my-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={8}
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "light" ? "white" : "grey",
                color: props.mode === "dark" ? "white" : "black",
              }}
            />
          </Form.Group>
        </Form>
      </Container>
      <Container>
        <Row>
          <Col sm>
            <Button variant="primary" onClick={handleUpClick}>
              Convert to Uppercase
            </Button>

            <Button
              variant="primary"
              className="mx-2 sm-m-4"
              onClick={handleLowClick}
            >
              Convert to Lowercase
            </Button>
            <Button
              variant="primary"
              className="mx-2"
              onClick={handleRemoveExtraSpace}
            >
              Remove Extra Space
            </Button>
            <Button variant="primary" className="mx-2" onClick={handleClear}>
              Clear text
            </Button>
            <Button variant="primary" className="mx-2" onClick={handleCopy}>
              Copy text
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
      </Container>
    </>
  );
}

export default BootstrapForm;
