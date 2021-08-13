import React, { useState } from "react";


export default function ColorEditor(props) {

  const curColorContext = React.createContext("#100");

  const [ currentColor, setCurrentColor ] = useState("#100");

  const styles = {
    backgroundColor: currentColor
  }

  return (
    <div className={"color-editor"} style={styles}>
    </div>
  )
}
