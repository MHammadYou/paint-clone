import React from "react";
import "../../css/components/canvas/styles.css"


export default function CanvasManager() {

  const handleClick = e => {
    console.log(e);
  }

  return (
    <canvas id={"canvas"} onClick={handleClick}></canvas>
  )
}