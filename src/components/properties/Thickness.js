import React, { useState } from "react";


export default function Thickness() {

  const [thickness, setThickness] = useState(10);

  const handleChange = (e) => {

    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    setThickness(e.target.value);
  }

  return (
    <div style={{"backgroundColor": "blue"}} className={"property"}>
      <div className="thickness-heading prop-heading">
        Thickness
        <input type="text" value={thickness} className={"prop-input thickness-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"thickness-slider prop-slider"}>
        <input type="range" min="1" max="100" value={thickness} className="slider" onChange={handleChange}/>
      </form>
    </div>
  )
}