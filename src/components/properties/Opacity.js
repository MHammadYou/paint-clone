import React, { useState } from "react";


export default function Opacity() {

  const [opacity, setOpacity] = useState(10);

  const handleChange = (e) => {

    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    setOpacity(e.target.value);
  }

  return (
    <div style={{"backgroundColor": "red"}} className={"property"}>
      <div className="opacity-heading prop-heading">
        Opacity
        <input type="text" value={opacity} className={"prop-input opacity-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"opacity-slider prop-slider"}>
        <input type="range" min="1" max="100" value={opacity} className="slider" onChange={handleChange}/>
      </form>
    </div>
  )
}