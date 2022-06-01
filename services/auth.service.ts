import axios from "axios"

const BaseUrl =
  process.env.NODE_ENV === "development"
    ? "https://pms-shr93.ondigitalocean.app/api/"
    : "https://pms-shr93.ondigitalocean.app/api/"

const register = (data: any) => {
  return axios.post(BaseUrl + "register", data)
}

const login = async (data: any) => {
  const response = await axios.post(BaseUrl + "user-login", data)
  if (response.data.accessToken) {
    localStorage.setItem("user", JSON.stringify(response.data))
  }
  return response.data
}

const logout = () => {
  localStorage.clear()
}

const authService = {
  register,
  login,
  logout,
}

export default authService
