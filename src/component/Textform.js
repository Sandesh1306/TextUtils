import React, { useState } from "react";
export default function Textform(props) {
  const handleupclick = () => {
    //console.log("upperCase was clicked");
    let Newtext = text.toUpperCase();
    setText(Newtext);
    props.showAlert("Converted to Uppercase!!", "success");
  };

  const handleloclick = () => {
    //console.log("lowerCase was clicked");
    let Newtext = text.toLowerCase();
    setText(Newtext);
    props.showAlert("Converted to lowercase!!", "success");
  };

  const handlecopy = () => {
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Successfully copied!!", "success");
  };

  const handleextraspaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed extra spaces!!", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleclear = () => {
    //console.log("clear was clicked");
    let Newtext = "";
    setText(Newtext);
    props.showAlert("Successfully clear!!", "success");
  };

  const handleonChange = (event) => {
    //console.log("handleonChange was click");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-4 my-2" >{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>
          Copy text
        </button>
        <button
          disabled={text.length===0} className="btn btn-primary mx-1 my-1"
          onClick={handleextraspaces}
        >
          Remove extra space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>
          speak
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleclear}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.trim() !== "").length}: words,{" "}
          {text.length} Characters
        </p>
        <p> {0.008 * text.split(/\s+/).filter((word) => word.trim() !== "").length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
