import React from "react";
import Palette from "./Palette";


export default function ColorsPalette() {

  const AllColors = [
    "black", "blue", "orange", "violet", "#897321", "#678",
    "#191", "#292", "#393", "#494", "#595", "#696",
    "#111", "#222", "#333", "#444", "#555", "#666",
  ];

  const colors = [];

  for (let i = 0; i < AllColors.length; i++) {
    colors.push(<Palette color={AllColors[i]} key={i} className={"palette"}/>)
  }

  return (
    <div className={"colors-palette"}>
      <div className="top-palette-colors">
        {colors.slice(0, 6)}
      </div>
      <div className="mid-palette-colors">
        {colors.slice(6, 12)}
      </div>
      <div className="bot-palette-colors">
        {colors.slice(12, 18)}
      </div>
    </div>
  )
}
