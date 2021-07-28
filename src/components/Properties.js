import React from "react";
import { Opacity, Thickness } from "./properties/index";
import "../css/components/properties/layout.css"

function Properties() {
  return (
    <div className={"properties"}>
      <div className={"opacity-container"}>
        <Opacity />
      </div>
      <div className={"thickness-container"}>
        <Thickness />
      </div>
    </div>
  );
}

export default Properties;
