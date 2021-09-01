import { createSlice } from "@reduxjs/toolkit";


export const toolsSlice = createSlice({
  name: 'tools',
  initialState: {
    value: "Marker"
  },
  reducers: {
    changeTool: ((state, action) => {
      state.value = action.payload;
    })
  }
})

export const { changeTool } = toolsSlice.actions;

export default toolsSlice.reducer;