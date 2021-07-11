import React from "react";
import { Navbar, Canvas, Tools, Properties, Colors } from "./components";
import "./css/app.css";
import "./css/layout.css";

function App() {
  return (
    <div className={"container"}>
      <div className={"main-flex-c1"}>
        <div className={"navbar-container"}>
          <Navbar />
        </div>
        <div className={"canvas-container"}>
          <Canvas />
        </div>
      </div>
      <div className={"main-flex-c2"}>
        <div className={"tools-container"}>
          <Tools />
        </div>
        <div className={"properties-container"}>
          <Properties />
        </div>
        <div className={"colors-container"}>
          <Colors />
        </div>
      </div>
    </div>
  );
}

export default App;
