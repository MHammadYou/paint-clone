import React from "react";

export default function Palette(props) {

  const handleChange = () => {
    console.log(props.color)
  }

  return (
    <div className={"palette"} style={{"backgroundColor": props.color}} onClick={handleChange}>
      Palette
    </div>
  )
}
