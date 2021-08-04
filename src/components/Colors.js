import React, { useState } from "react";
import { ColorEditor, EyeDropper, ColorsPalette, RecentColors } from "./colors/index";
import "../css/components/colors/layout.css";

function Colors() {



  return (
    <div className={"colors"}>
      <div className="colors-top">
        <div className="color-editor-container">
          <ColorEditor />
        </div>
        <div className="eye-dropper-container">
          <EyeDropper />
        </div>
      </div>
      <div className="color-palette-container">
        <ColorsPalette />
      </div>
      <div className="recent-colors-container">
        <RecentColors />
      </div>
    </div>
  );
}

export default Colors;
