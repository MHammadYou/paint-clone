import React from "react";


export default function Thickness() {
  return (
    <div>
      <div className="thickness-heading prop-heading">
        Thickness
      </div>
      <form action="">
        <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
      </form>
    </div>
  )
}