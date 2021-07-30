import React from "react";


export default function Opacity() {
  return (
    <div style={{"background-color": "red"}} className={"property"}>
      <div className="opacity-heading prop-heading">
        Opacity
      </div>
      <form action="">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
      </form>
    </div>
  )
}