import React from "react";
import { Opacity, Thickness } from "./properties/index";
import "../css/components/properties/layout.css"
import "../css/components/properties/styles.css"

function Properties() {
  return (
    <div className={"properties"}>
      <div className={"thickness-container"}>
        <Thickness />
      </div>
      <div className={"opacity-container"}>
        <Opacity />
      </div>
    </div>
  );
}

export default Properties;
