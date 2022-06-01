import axios from "axios"
import { RootState, useAppSelector } from "store"
import authHeader from "./auth-header"
const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "https://pms-shr93.ondigitalocean.app/api/"
    : "https://pms-shr93.ondigitalocean.app/api/"

export const isBrowser = (): boolean => {
  return typeof window !== "undefined"
}

export const nextLocalStorage = (): Storage | void => {
  if (isBrowser()) {
    console.log("onClick")
    return window.localStorage
  } else {
    console.log("rubbish")
  }
}

// const user: any = JSON.parse(nextLocalStorage()?.getItem("user")!)

// console.log("unnno", user.id)

let header: any = authHeader()

const getOrganization = (data: any) => {
  return axios.get(BaseUrl + `settings/get-organization/${data}`, {
    headers: header,
  })
}
const userService = {
  getOrganization,
}
export default userService
