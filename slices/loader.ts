import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setLoader: (state, action) => {
      return { ...state, loader: action.payload }
    },
    clearLoader: () => {
      return { loader: "" }
    },
  },
})

const { reducer, actions } = loaderSlice
export const { setLoader, clearLoader } = actions
export default reducer
