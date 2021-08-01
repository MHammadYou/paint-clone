import React, { useState } from "react";


export default function Opacity() {

  const [opacity, setOpacity] = useState(10);

  const handleChange = (e) => {
    console.log(e)
  }

  return (
    <div style={{"backgroundColor": "red"}} className={"property"}>
      <div className="opacity-heading prop-heading">
        Opacity
        <input type="text" defaultValue={opacity} className={"prop-input opacity-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"opacity-slider prop-slider"}>
        <input type="range" min="1" max="100" defaultValue={opacity} className="slider"/>
      </form>
    </div>
  )
}