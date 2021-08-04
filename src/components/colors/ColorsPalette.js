import React from "react";
import Palette from "./Palette";


export default function ColorsPalette() {

  const AllColors = ["black", "blue", "orange", "violet", "#897321"];

  let elements = [];

  for (let i = 0; i < AllColors.length; i++) {
    elements.push(<Palette color={AllColors[i]} key={i}/>)
  }
  console.log(elements)

  return (
    <div className={"colors-palette"} style={{"backgroundColor": "blue"}}>
      {elements}
    </div>
  )
}
