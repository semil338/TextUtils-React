import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Form from "./components/Textform";
import AlertBootstrap from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#353333";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <AlertBootstrap alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />} />

          <Route
            exact
            path="/"
            element={
              <Form
                heading="Enter the text to analyze below"
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>

      {/* <About /> */}
    </>
  );
}

export default App;
