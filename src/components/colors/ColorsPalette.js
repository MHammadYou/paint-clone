import React from "react";
import Palette from "./Palette";


export default function ColorsPalette() {

  const AllColors = [
    "#ffffff", "#c3c3c3", "#585858", "#000000", "#88001b", "#ec1c24",
    "#ff7f27", "#ffca18", "#fdeca6", "#fff200", "#c4ff0e", "#0ed145",
    "#8cfffb", "#00a8f3", "#3f48cc", "#b83dba", "#ffaec8", "#b97a56",
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
