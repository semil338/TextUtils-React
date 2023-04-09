import Alert from "react-bootstrap/Alert";

function AlertBootstrap(props) {
  return (
    props.alert && (
      <Alert variant={props.alert.type}>
        <p className="m-auto">{props.alert.msg}</p>
      </Alert>
    )
  );
}

export default AlertBootstrap;
