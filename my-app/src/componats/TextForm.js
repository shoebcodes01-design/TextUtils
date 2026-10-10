import React, { useState } from "react";

export default function TextForm(props) {
  const handleupcsae = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handledelCase = () => {
    let newText = "";
    alert(`Are you sure delete all text : `);
    setText(newText);
  };
  const handleOnchabge = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="my-box"
          onChange={handleOnchabge}
          rows="9"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupcsae}>
        Convert to UpperCAse
      </button>
      <button className="btn btn-primary mx-3" onClick={handlelowCase}>
        Convert to LowerCsae
      </button>
      <button className="btn btn-primary mx-3" onClick={handledelCase}>
        Delete all
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>

      <div className="container my-3">
        <h1>Your Text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charactors
        </p>
        <p>{0.008 * text.split("").length} Minutes of read</p>
        <h2>Preview</h2>

        <p>{text}</p>
      </div>
    </div>
  );
}
