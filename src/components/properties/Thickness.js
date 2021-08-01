import React, { useState } from "react";


export default function Thickness() {

  const [thickness, setThickness] = useState(10);

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <div style={{"backgroundColor": "blue"}} className={"property"}>
      <div className="thickness-heading prop-heading">
        Thickness
        <input type="text" defaultValue={thickness} className={"prop-input thickness-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"thickness-slider prop-slider"}>
        <input type="range" min="1" max="100" defaultValue={thickness} className="slider"/>
      </form>
    </div>
  )
}