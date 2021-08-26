import React from "react";
import { useSelector } from "react-redux";


export default function ColorEditor() {

  const color = useSelector(state => state.colors.value)

  const styles = {
    backgroundColor: color
  }

  return (
    <div className={"color-editor"} style={styles}>
    </div>
  )
}
