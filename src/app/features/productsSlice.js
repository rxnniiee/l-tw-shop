import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

// algne toodete state, lisatud ka 4 algset toodet
const initialState = {
  list: [
    {
      id: 'MeHOXJin61TxDB11',
      name: 'Adidas kaitsemask',
      price: 19.9,
      image: 'https://i.imgur.com/P9KCh64.png',
    },
    {
      id: 'd2Z5UtI5aJfNyVCv',
      name: 'Apple AirPods Pro',
      price: 249.0,
      image: 'https://i.imgur.com/agWzSWn.png',
    },
    {
      id: 'SmJBRejiVddgSHD2',
      name: 'Segway Kickscooter E22E',
      price: 318.9,
      image: 'https://i.imgur.com/VeVhHpI.png',
    },
    {
      id: 'M9rzjIzIStg87XCR',
      name: 'Samsung MS23K3513AS',
      price: 98.9,
      image: 'https://i.imgur.com/Qbju7LF.png',
    },
  ],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action) => {
      // määra tootele id
      action.payload.id = nanoid()
      // lisa toode listi
      state.list = [...state.list, action.payload]
    },
    remove: (state, action) => {
      // filtreeri toodetest toode mille id kattub eemaldatava toote id'ga
      state.list = state.list.filter(product => product.id !== action.payload)
    },
  },
})

export const productsActions = {
  ...productsSlice.actions,
}

export default productsSlice.reducer
