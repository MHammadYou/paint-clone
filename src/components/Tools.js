import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTool } from "./tools/toolsSlice";
import { Marker, OilPaint, WaterColor, PixelPen, Pencil, Eraser, Crayon, SprayCan, ToolsHeading } from "./tools/index";
import "../css/components/tools/layout.css"
import "../css/components/tools/styles.css"

function Tools() {

  const tool = useSelector(state => state.tools.value);
  const dispatch = useDispatch();

  const tools = ["Marker", "Oil brush", "Watercolor", "Pixel pen", "Pencil", "Eraser", "Crayon", "Spray can"];

  const handleClick = toolId => {
    dispatch(changeTool(tools[toolId]));
  }

  return (
    <div className={"tools"}>
      <div className="tools-heading-container">
        <ToolsHeading heading={tool}/>
      </div>
      <div className="all-tools">
        <div className="tools-row-1">
          <div onClick={() => handleClick(0)}>
            <Marker />
          </div>
          <div onClick={() => handleClick(1)}>
            <OilPaint/>
          </div>
          <div onClick={() => handleClick(2)}>
            <WaterColor />
          </div>
          <div onClick={() => handleClick(3)}>
            <PixelPen />
          </div>
        </div>
        <div className="tools-row-2">
          <div onClick={() => handleClick(4)}>
            <Pencil />
          </div>
          <div onClick={() => handleClick(5)}>
            <Eraser />
          </div>
          <div onClick={() => handleClick(6)}>
            <Crayon />
          </div>
          <div onClick={() => handleClick(7)}>
            <SprayCan />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tools;
