import "../styles/globals.css"
import type { AppProps } from "next/app"
import store from "../store"
import { Provider } from "react-redux"
import { Shield } from "@routes/Shield"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"

let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Shield>
          <Component {...pageProps} />
        </Shield>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
