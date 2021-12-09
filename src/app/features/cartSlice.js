import { createSlice } from '@reduxjs/toolkit'

// algne ostukorvi state, tühi
const initialState = {
  list: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // lisab toote ostukorvi
    add: (state, action) => {
      state.list = [...state.list, action.payload]
    },
  },
})

export const cartActions = {
  ...cartSlice.actions,
}

export default cartSlice.reducer
