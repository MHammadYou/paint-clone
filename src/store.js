import { configureStore } from "@reduxjs/toolkit";

import colorsReducer from "./components/colors/colorsSlice";
import opacityReducer from "./components/properties/opacitySlice";
import thicknessReducer from "./components/properties/thicknessSlice";
import toolsReducer from "./components/tools/toolsSlice";

export default configureStore({
  reducer: {
    colors: colorsReducer,
    opacity: opacityReducer,
    thickness: thicknessReducer,
    tools: toolsReducer,
  },
})