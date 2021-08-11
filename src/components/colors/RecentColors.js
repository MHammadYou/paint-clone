import React, { useState } from "react";
import Queue from "../../utils/queue";
import Palette from "./Palette";

export default function RecentColors() {

  const queue = new Queue(6);
  const initialColors = ["#999", "#888", "#777", "#666", "#555", "#444"]
  const [ colors, setColors ] = useState(initialColors);


  for (let i = 0; i < colors.length; i++) {
    queue.addElement(<Palette color={initialColors[i]} key={i} className={"palette"}/>)
  }

  return (
    <div className={"recent-colors"}>
      {queue.getQueue()}
    </div>
  )
}