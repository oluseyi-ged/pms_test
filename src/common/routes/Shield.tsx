import { useRouter } from "next/router"
import { NextShield, NextShieldProps } from "next-shield"

import { Children } from "../types/Components"
import { Loader } from "../components/application/Loader"
import { RootState, useAppSelector } from "store"

export function Shield({ children }: Children) {
  const { user: currentUser } = useAppSelector<any>(
    (store: RootState) => store.auth
  )

  const router = useRouter()
  const shieldProps: NextShieldProps<
    ["/"],
    ["/auth", "/auth/login", "/auth/login"]
  > = {
    router,
    isAuth: currentUser,
    isLoading: false,
    privateRoutes: ["/"],
    publicRoutes: ["/auth", "/auth/login", "/auth/login"],
    hybridRoutes: [],
    loginRoute: "/auth/login",
    accessRoute: "/",
    LoadingComponent: <Loader color="#6B51DF" />,
  }

  return <NextShield {...shieldProps}>{children}</NextShield>
}

/*
isAuth holds the user state of the app

isLoading is provided by the state of the app. Indicates if the user's data is already available or not.

privateRoutes is the Array of private routes. These are only accessible when the user is authenticated.

publicRoutes is the Array of public routes. These are only accessible when the user is NOT authenticated.

hybridRoutes is the Array of hybrid routes. These are always accessible; doesn't matter the auth state.

loginRoute is the Login page. Must be a public route.

accessRoute is the Route where your user is going to access after login. Must be a private route.

LoadingComponent is the React Component which is going to appear when isLoading equals to true.
 */
