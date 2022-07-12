import React, { useState } from "react";
import "../App.css";

export default function Textbox(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [spaceCount, setSpaceCount] = useState(0);
  const [minTime, setMinTime] = useState(0);
  const [maxTime, setMaxTime] = useState(0);

  const clickUpHandler = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length>0) {
      props.showAlert("Text converted to uppercase.", "Successful :", "success");
    }else{
      props.showAlert("Enter some text first!", "Warning :", "warning");

    }
  };

  const clickLowHandler = () => {
    let newText = text.toLowerCase();
    setText(newText);

    if (text.length>0) {
      props.showAlert("Text converted to lowercase.", "Successful :", "success");
    }else{
      props.showAlert("Enter some text first!", "Warning :", "warning");

    }
  };

  const extraSpaceHandler = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if (document.getElementById("inputTextBox").value.length === 0) {
      clearTextHandler();
    }
    if (text.length>0) {
      props.showAlert("Extra spaces removed.", "Successful :", "success");
    }else{
      props.showAlert("Enter some text first!", "Warning :", "warning");
    }
  };

  const copyTextHandler = () => {
    let txt = document.getElementById("inputTextBox");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    if (text.length>0) {
      props.showAlert("Text copied!", "Successful :", "success");
    }else{
      props.showAlert("No text to copy!", "Error :", "danger");
    }

  };

  const clearTextHandler = () => {
    setText("");
    setCharCount(0);
    setSpaceCount(0);
    setWordCount(0);
    setMinTime(0);
    setMaxTime(0);

    if (text.length>0) {
      props.showAlert("Text box clear.", "Successful :", "success");
    }else{
      props.showAlert("Nothing to clear!", "Error :", "danger");
    }

  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
    calculateCounts();
    calculateTime();

    if (document.getElementById("inputTextBox").value.length === 0) {
      clearTextHandler();
    }
  };

  function calculateCounts() {
    let sC = text.length - text.replaceAll(" ", "").length;
    setSpaceCount(sC);
    setCharCount(text.length - spaceCount);
    setWordCount(text.split(/[ ]+/).length);
  }

  function calculateTime() {
    let minT = 0.004 * wordCount.toFixed(2);
    if (minT < 1) {
      setMinTime((minT * 60).toFixed(2) + " sec");
    } else {
      setMinTime(minT + " min");
    }

    let maxT = 0.009 * wordCount.toFixed(2);
    if (maxT < 1) {
      setMaxTime((maxT * 60).toFixed(2) + " sec");
    } else {
      setMaxTime(maxT + " min");
    }
  }

  return (
    <>
      <div className={`container ${props.mode}-color`}>
        <div className="mb-3 my-4">
          <h1 className="mb-4 my-4">{props.heading}</h1>
          <textarea
            className="form-control"
            id="inputTextBox"
            rows="8"
            value={text}
            onChange={textChangeHandler}
            onKeyDownCapture={calculateCounts}
          ></textarea>

          <div className="btn-div">
            <button
              className={`btn btn-${
                props.mode === "light" ? "primary" : "light"
              } my-4 mx-2`}
              onClick={clickUpHandler}
            >
              convert to uppercase
            </button>
            <button
              className={`btn btn-${
                props.mode === "light" ? "primary" : "light"
              } my-4 mx-2`}
              onClick={clickLowHandler}
            >
              convert to lowercase
            </button>
            <button
              className={`btn btn-${
                props.mode === "light" ? "primary" : "light"
              } my-4 mx-2`}
              onClick={extraSpaceHandler}
            >
              remove extra space
            </button>
            <button
              className={`btn btn-${
                props.mode === "light" ? "primary" : "light"
              } my-4 mx-2`}
              onClick={copyTextHandler}
            >
              copy text
            </button>
            <button
              className={`btn btn-${
                props.mode === "light" ? "primary" : "light"
              } my-4 mx-2`}
              onClick={clearTextHandler}
            >
              clear text
            </button>
          </div>
        </div>
      </div>

      <div className={`container ${props.mode}-color`}>
        <h3 className="my-3">Your text summary</h3>
        <div className="text-summary">
          <p className="my-2">
            Number of words : <b>{wordCount} </b>
          </p>
          <p className="my-2">
            Number of characters (without extra spaces) : <b> {charCount} </b>
          </p>
          <p className="my-2">
            Reading time : <b> {minTime} </b> to <b>{maxTime}</b>
          </p>
        </div>
      </div>

      <div className={`container ${props.mode}-color`}>
        <h3 className="my-4">Preview</h3>
        <p>
          {text.length === 0 ? "Enter text above to preview it here." : text}
        </p>
      </div>
    </>
  );
}
