import React from "react";
import { Marker, OilPaint, WaterColor, PixelPen, Pencil, Eraser, Crayon, SprayCan, ToolsHeading } from "./tools/index";
import "../css/components/tools/layout.css"
import "../css/components/tools/styles.css"

function Tools() {
  return (
    <div className={"tools"}>
      <div className="tools-heading-container">
        <ToolsHeading heading={"Marker"}/>
      </div>
      <div className="all-tools">
        <div className="tools-row-1">
          <Marker />
          <OilPaint />
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
