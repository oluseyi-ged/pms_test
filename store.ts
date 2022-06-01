import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import authReducer from "./slices/auth"
import messageReducer from "./slices/message"
import loaderReducer from "./slices/loader"
import storage from "redux-persist/lib/storage"
import { AnyAction, combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import thunk, { ThunkDispatch } from "redux-thunk"

const reducers = combineReducers({
  auth: authReducer,
  message: messageReducer,
  loader: loaderReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  // middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
// export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store
