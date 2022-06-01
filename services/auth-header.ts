export const isBrowser = (): boolean => {
  return typeof window !== "undefined"
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    return window.localStorage
  }
}

const token: any = nextLocalStorage()?.getItem("token")?.trim()!

export default function authHeader() {
  if (token) {
    return { Authorization: "Bearer " + `${token}` }
  } else {
    return {}
  }
}
