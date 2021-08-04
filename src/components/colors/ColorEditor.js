import React, { useState } from "react";


export default function ColorEditor(props) {

  const [ currentColor, setCurrentColor ] = useState("#100");

  return (
    <div className={"color-editor"} style={{"backgroundColor": currentColor}}>

    </div>
  )
}
