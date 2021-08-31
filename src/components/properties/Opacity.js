import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeOpacity } from "./opacitySlice";


export default function Opacity() {

  const opacity = useSelector(state => state.opacity.value);
  const dispatch = useDispatch()

  const handleChange = e => {

    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    dispatch(changeOpacity(e.target.value))
  }

  return (
    <div className={"property"}>
      <div className="prop-top">
        <div className="opacity-heading prop-heading">
          Opacity
        </div>
        <input type="text" value={opacity} className={"prop-input opacity-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"opacity-slider prop-slider"}>
        <input type="range" min="1" max="100" value={opacity} className="slider" onChange={handleChange}/>
      </form>
    </div>
  )
}