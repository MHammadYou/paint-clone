import { configureStore } from "@reduxjs/toolkit";

import colorsReducer from "./components/colors/colorsSlice"

export default configureStore({
  reducer: {
    colors: colorsReducer
  },
})