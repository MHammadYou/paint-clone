import React, { useState } from "react";


export default function EyeDropper() {

  const [ bgColor, setBgColor ] = useState("#000");

  const handleChange = e => {
    setBgColor(e.target.value);
  }

  const styles = {
    backgroundColor: bgColor
  }

  return (
    <div className={"eye-dropper"} style={styles}>
    </div>
  )
}
