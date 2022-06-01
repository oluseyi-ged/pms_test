import "../styles/globals.css"
import type { AppProps } from "next/app"
import store from "../store"
import { Provider } from "react-redux"
import { Shield } from "@routes/Shield"
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import Head from "next/head"

let persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PMS Test</title>
        <meta name="viewport" content="initial-scale=0.1, width=device-width" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Shield>
            <Component {...pageProps} />
          </Shield>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
