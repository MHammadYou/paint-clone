import React, { useState } from "react";


export default function EyeDropper() {

  const [ bgColor, setBgColor ] = useState("#000");

  const handleChange = e => {
    console.log(e.target.value);
    setBgColor(e.target.value);
  }

  const styles = {
    backgroundColor: bgColor
  }

  return (
    <div className={"eye-dropper"} style={styles}>
      <input type="color" onChange={handleChange}/>
    </div>
  )
}
