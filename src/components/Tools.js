import React, { useState } from "react";
import { Marker, OilPaint, WaterColor, PixelPen, Pencil, Eraser, Crayon, SprayCan, ToolsHeading } from "./tools/index";
import "../css/components/tools/layout.css"
import "../css/components/tools/styles.css"

function Tools() {

  const [heading, setHeading] = useState("Marker");

  const handleClick = newHeading => {
    setHeading(newHeading);
  }

  return (
    <div className={"tools"}>
      <div className="tools-heading-container">
        <ToolsHeading heading={heading}/>
      </div>
      <div className="all-tools">
        <div className="tools-row-1">
          <Marker />
          <OilPaint onClick={() => console.log("Working")}/>
          <WaterColor />
          <PixelPen />
        </div>
        <div className="tools-row-2">
          <Pencil />
          <Eraser />
          <Crayon />
          <SprayCan />
        </div>
      </div>
    </div>
  );
}

export default Tools;
