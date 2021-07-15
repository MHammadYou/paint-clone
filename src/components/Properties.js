import React from "react";
import Opacity from "./properties/Opacity";
import Thickness from "./properties/Thickness";

function Properties() {
  return (
    <div style={{ backgroundColor: "blue" }} className={"properties"}>
      <Opacity />
      <Thickness />
    </div>
  );
}

export default Properties;
