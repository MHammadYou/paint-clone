import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeThickness } from "./thicknessSlice";


export default function Thickness() {

  const thickness = useSelector(state => state.thickness.value);
  const dispatch = useDispatch();

  const handleChange = e => {

    if (e.target.value > 100) {
      e.target.value = 100;
    }
    if (e.target.value < 1) {
      e.target.value = 1;
    }
    dispatch(changeThickness(e.target.value));
  }

  return (
    <div className={"property"}>
      <div className="prop-top">
        <div className="thickness-heading prop-heading">
          Thickness
        </div>
        <input type="text" value={thickness} className={"prop-input thickness-input"} onChange={handleChange}/>
      </div>
      <form action="" className={"thickness-slider prop-slider"}>
        <input type="range" min="1" max="100" value={thickness} className="slider" onChange={handleChange}/>
      </form>
    </div>
  )
}