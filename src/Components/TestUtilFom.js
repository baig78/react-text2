import React, { useState, useEffect  } from "react";

export default function TestUtilFom(props) {
  const handleUpClick = () => {
    console.log("Uppercase " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    console.log("Uppercase " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
 
  const handleTitleClick = () => {
    let newText = toTitleCase(text);
    setText(newText);
  };
  function toTitleCase(text) {
    return text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  const handleRemoveText = () => {
    setText("");
    localStorage.removeItem("savedText");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleSensitiveClick = () => {
    let newText = toSensitiveCase(text);
    setText(newText);
  };

  function toSensitiveCase(text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  useEffect(() => {
    const savedText = localStorage.getItem("savedText");
    if (savedText) {
      setText(savedText);
    }
  }, []);
  const handleSaveClick = () => {
    // Save the text to localStorage
    localStorage.setItem("savedText", text);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container">
        <h2>{props.heading} </h2>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        
        <button className="btn btn-primary ms-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary ms-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary ms-1" onClick={handleTitleClick}>
          Convert to Title Case
        </button>
        <button className="btn btn-primary ms-1" onClick={handleRemoveText}>
          Remove Text
        </button>
        <button className="btn btn-primary ms-1" onClick={handleSensitiveClick}>
          Convert to Sensitive Case
        </button>
        <button className="btn btn-primary ms-1" onClick={handleSaveClick}>
          Save
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Miniutes read </p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
