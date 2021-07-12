import React from "react";
import { Tool1, ToolsHeading } from "./tools/index";
import "../css/components/tools/layout.css"

function Tools() {
  return (
    <div className={"tools"}>
      <div className="tools-heading-container">
        <ToolsHeading heading={"Marker"}/>
      </div>
      <div className="tools-container">
        <div className="tools-row-1">
          <Tool1 />
          <Tool1 />
          <Tool1 />
          <Tool1 />
        </div>
        <div className="tools-row-2">
          <Tool1 />
          <Tool1 />
          <Tool1 />
          <Tool1 />
        </div>
      </div>
    </div>
  );
}

export default Tools;
