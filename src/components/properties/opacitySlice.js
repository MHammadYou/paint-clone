import { createSlice } from "@reduxjs/toolkit"


export const opacitySlice = createSlice({
  name: 'opacity',
  initialState: {
    value: 10
  },
  reducers: {
    changeOpacity: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeOpacity } = opacitySlice.actions

export default opacitySlice.reducer