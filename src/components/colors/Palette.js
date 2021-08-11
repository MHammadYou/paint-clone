import React from "react";

export default function Palette(props) {

  const handleChange = () => {
    console.log(props.color)
  }

  const styles = {
    backgroundColor: props.color
  }

  return (
    <div className={"palette"} style={styles} onClick={handleChange}>

    </div>
  )
}
