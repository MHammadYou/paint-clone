import React from "react";
import { Navbar, Canvas, Tools, Properties, Colors } from "./components";
import "./css/app.css";

function App() {
  const styles = {
    "background-color": "orange",
  };

  return (
    <div className={"container"}>
      <Navbar />
      <Canvas />
      <Tools />
      <Properties />
      <Colors />
    </div>
  );
}

export default App;
