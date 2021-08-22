import React from "react";
import "../../css/components/canvas/styles.css"


export default function CanvasManager() {

  const handleClick = e => {
    console.log(e);
  }

  const canvas = <canvas ref={"canvas"} id={"canvas"} onClick={handleClick}> </canvas>

  console.log(canvas);

  return (
    <div>
      {canvas}
    </div>
  )
}