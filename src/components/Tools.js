import React, { useState } from "react";
import { Marker, OilPaint, WaterColor, PixelPen, Pencil, Eraser, Crayon, SprayCan, ToolsHeading } from "./tools/index";
import "../css/components/tools/layout.css"
import "../css/components/tools/styles.css"

function Tools() {

  const [tool, setTool] = useState("Marker");

  const handleClick = newTool => {
    setTool(newTool);
  }

  return (
    <div className={"tools"}>
      <div className="tools-heading-container">
        <ToolsHeading heading={tool}/>
      </div>
      <div className="all-tools">
        <div className="tools-row-1">
          <div onClick={() => handleClick("Marker")}>
            <Marker />
          </div>
          <div onClick={() => handleClick("Oil brush")}>
            <OilPaint/>
          </div>
          <div onClick={() => handleClick("Watercolor")}>
            <WaterColor />
          </div>
          <div onClick={() => handleClick("Pixel pen")}>
            <PixelPen />
          </div>
        </div>
        <div className="tools-row-2">
          <div onClick={() => handleClick("Pencil")}>
            <Pencil />
          </div>
          <div onClick={() => handleClick("Eraser")}>
            <Eraser />
          </div>
          <div onClick={() => handleClick("Crayon")}>
            <Crayon />
          </div>
          <div onClick={() => handleClick("Spray can")}>
            <SprayCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
