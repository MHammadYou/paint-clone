import React from "react";
import Palette from "./Palette";


export default function ColorsPalette() {

  const AllColors = [
    ["black", "blue", "orange", "violet", "#897321"],
    ["#111", "#222", "#333", "#444", "#555", "#666"],
    ["#111", "#222", "#333", "#444", "#555", "#666"],
  ];

  const topColors = [];
  const midColors = [];
  const botColors = [];

  for (let i = 0; i < AllColors[0].length; i++) {
    topColors.push(<Palette color={AllColors[0][i]} key={i}/>)
    midColors.push(<Palette color={AllColors[1][i]} key={i}/>)
    botColors.push(<Palette color={AllColors[2][i]} key={i}/>)
  }
  console.log(topColors)

  return (
    <div className={"colors-palette"} style={{"backgroundColor": "blue"}}>
      <div className="top-colors">
        {topColors}
      </div>
      <div className="mid-colors">
        {midColors}
      </div>
      <div className="bot-colors">
        {botColors}
      </div>
    </div>
  )
}
