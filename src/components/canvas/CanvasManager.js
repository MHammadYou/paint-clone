import React, { useRef, useEffect } from "react";
import "../../css/components/canvas/styles.css"


export default function CanvasManager() {

  const canvasRef = useRef(null);

  const draw = ctx => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  }

  const handleClick = e => {
    console.log(e)
  }

  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = innerWidth * 4 / 5;
    canvas.height = innerHeight * 91 / 100;

    draw(context);
  }, [draw])


  return (
    <canvas ref={canvasRef} onClick={handleClick}/>
  )
}