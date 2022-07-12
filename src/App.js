import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#131417";
      showAlert("Dark mode enabled." ,"Successful :", "success")
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffffff";
      showAlert("Light mode enabled." ,"Successful :", "success")
    }
   
  };

  const showAlert = (message,status, type) => {
    setAlert({
      mssg: message,
      status : status,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  };

  return (
    <div className={`App`}>
      <Navbar title="Text Tools" mode={mode} toggleMode={toggleMode} />
      <Alerts alert = {alert}/>
      <Textbox heading="Enter your text here" mode={mode} showAlert = {showAlert} alert = {alert} />
    </div>
  );
}
export default App;
