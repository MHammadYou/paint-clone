import React from "react";
import {CanvasManager} from "./canvas/index";

function Canvas() {
  return (
    <div style={{ backgroundColor: "purple" }} className={"canvas"}>
      <CanvasManager />
    </div>
  );
}

export default Canvas;
