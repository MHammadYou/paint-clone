import { createSlice } from "@reduxjs/toolkit";


export const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    value: "black"
  },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeColor } = colorsSlice.actions

export default colorsSlice.reducer