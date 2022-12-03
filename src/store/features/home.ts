import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    count: 100,
    message: 'hello world'
  },
  reducers: {
    addCountAction(state, { payload }) {
      state.count += payload
    }
  }
})
export const { addCountAction } = homeSlice.actions

export default homeSlice.reducer
