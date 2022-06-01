import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit"
import { setMessage } from "./message"
import AuthService from "../services/auth.service"
import { setLoader } from "./loader"

// const user = JSON.parse(localStorage.getItem("user")!)
// const localData: any = "loading"
// const user = localData

export const isBrowser = (): boolean => {
  return typeof window !== "undefined"
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage
  }
}

const user = nextLocalStorage()?.getItem("user")

export const register = createAsyncThunk(
  "auth/register",
  async (userData: any, thunkAPI) => {
    thunkAPI.dispatch(setLoader(true))
    try {
      const response: any = await AuthService.register(userData)
      console.log(response?.data?.message)

      thunkAPI.dispatch(setLoader(false))
      thunkAPI.dispatch(setMessage(response?.message))
      return response.data
    } catch (error: any) {
      const message =
        error.response.errors.email || error.response.errors.phoneNumber
      console.log(
        "error",
        error.response.data.errors.password || error.response.data.errors.email
      )
      thunkAPI.dispatch(setLoader(false))
      thunkAPI.dispatch(setMessage(message))
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const login = createAsyncThunk(
  "auth/login",
  async (userData: any, thunkAPI) => {
    thunkAPI.dispatch(setLoader(true))
    try {
      const data: any = await AuthService.login(userData)
      thunkAPI.dispatch(setLoader(false))
      return { user: data }
    } catch (error: any) {
      const message =
        (error?.response && error.response?.data?.message) ||
        error?.message ||
        error?.toString()
      thunkAPI.dispatch(setMessage(message))
      thunkAPI.dispatch(setLoader(false))
      console.log(error)
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout()
})

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null }
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [register.fulfilled.toString()]: (state, action) => {
      state.isLoggedIn = false
    },
    [register.rejected.toString()]: (state, action) => {
      state.isLoggedIn = false
    },
    [login.fulfilled.toString()]: (state, action) => {
      state.isLoggedIn = true
      state.user = action.payload.user
    },
    [login.rejected.toString()]: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
    [logout.fulfilled.toString()]: (state, action) => {
      state.isLoggedIn = false
      state.user = null
    },
  },
})

const { reducer } = authSlice

export default reducer
