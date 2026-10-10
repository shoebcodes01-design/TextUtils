import Navbar from "./componats/Navbar";
import TextForm from "./componats/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setmod] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setmod("dark");
      document.body.style.backgroundColor = "#100d25";
      document.body.style.color = "white";
    } else {
      setmod("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar
        navbar="TextUtils"
        about="About"
        contact="Contact"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-4">
        <TextForm heading="Enter the text analyze" />
      </div>
    </>
  );
}

export default App;
