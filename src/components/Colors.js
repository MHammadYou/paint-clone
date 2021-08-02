import React from "react";
import { ColorEditor, EyeDropper, ColorsPalette, RecentColors } from "./colors/index";

function Colors() {
  return (
    <div style={{ backgroundColor: "green" }} className={"colors"}>
      <ColorEditor />
      <EyeDropper />
      <ColorsPalette />
      <RecentColors />
    </div>
  );
}

export default Colors;
