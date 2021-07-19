import React from "react";
import { ColorsManager, ColorsPalette, RecentColors } from "./colors/index";

function Colors() {
  return (
    <div style={{ backgroundColor: "green" }} className={"colors"}>
      <ColorsManager />
      <ColorsPalette />
      <RecentColors />
    </div>
  );
}

export default Colors;
