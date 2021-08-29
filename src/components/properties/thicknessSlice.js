import { createSlice } from "@reduxjs/toolkit"


export const thicknessSlice = createSlice({
  name: 'thickness',
  initialState: {
    value: 0
  },
  reducers: {
    changeThickness: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeThickness } = thicknessSlice.actions

export default thicknessSlice.reducer