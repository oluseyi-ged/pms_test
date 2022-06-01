/* eslint-disable @next/next/no-img-element */
import Dashboard from "@modules/dashboard/Home"
import Setting from "@modules/dashboard/Setting"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { useEffect, useState } from "react"
import store, { RootState, useAppSelector } from "store"
import { Container } from "./styles"

const Home: NextPage = () => {
  const { user: currentUser } = useAppSelector<any>(
    (store: RootState) => store.auth
  )

  // console.log("checkout", currentUser)

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser?.data?.user))
    localStorage.setItem("token", currentUser?.data?.token)
  }, [])

  const [route, setRoute] = useState("dashboard")
  const [setting, setSetting] = useState("system")

  return (
    <Container>
      <div className="sideBar">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1653948085/pms_lg_kgphlt.svg"
          alt=""
          className="dashboard__logo"
        />
        <div>
          <div onClick={() => setRoute("dashboard")}>
            <p className={route === "dashboard" ? "activeBar" : "sidebarItem"}>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1654099542/dash_zy71ur.svg"
                alt=""
              />
              Dashboard
            </p>
          </div>
          <div onClick={() => setRoute("setting")}>
            <p className={route !== "dashboard" ? "activeBar" : "sidebarItem"}>
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1654099542/wheel_r5uvpl.svg"
                alt=""
              />
              Settings
            </p>

            {route !== "dashboard" && (
              <div className="sideBar__subitem">
                <p
                  className={
                    setting === "system" ? "activeItem" : "sidebarItem"
                  }
                  onClick={() => setSetting("system")}
                >
                  System Settings
                </p>
                <p
                  className={
                    setting !== "system" ? "activeItem" : "sidebarItem"
                  }
                  onClick={() => setSetting("general")}
                >
                  General Settings
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="pages">
        {route === "dashboard" ? (
          <Dashboard setRoute={setRoute} />
        ) : (
          <Setting
            setRoute={setRoute}
            setting={setting}
            setSetting={setSetting}
          />
        )}
      </div>
    </Container>
  )
}

export default Home
