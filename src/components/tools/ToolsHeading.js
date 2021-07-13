import React from "react";


function ToolsHeading(props) {
  if (props.heading && typeof props.heading == "string") {
    return (
      <span className={"tools-heading"}>{props.heading}</span>
    )
  }
  else {
    throw("No heading provided");
  }

}

export default ToolsHeading;