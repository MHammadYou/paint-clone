import React from "react";
import { useDispatch } from "react-redux";

import { changeColor } from "./colorsSlice";

export default function Palette(props) {

  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(changeColor(props.color))
  } 

  const styles = {
    backgroundColor: props.color
  }

  return (
    <div className={"palette"} style={styles} onClick={handleChange}>

    </div>
  )
}
