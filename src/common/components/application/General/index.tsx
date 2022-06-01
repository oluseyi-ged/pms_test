/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react"
import { RootState, useAppSelector } from "store"
import Button from "../Button"
import Input from "../Input"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"

const General = () => {
  const [tab, setTab] = useState("security")

  const { user: currentUser } = useAppSelector<any>(
    (store: RootState) => store.auth
  )
  const udata = currentUser?.data?.user

  return (
    <Container>
      <div className="profile__container">
        <h4>General Settings</h4>
        <div className="page__menu">
          <p
            className={tab === "security" ? "active__tab" : "tab"}
            onClick={() => setTab("security")}
          >
            Security
          </p>
          <p
            className={tab !== "security" ? "active__tab" : "tab"}
            onClick={() => setTab("personal")}
          >
            Personal Settings
          </p>
        </div>

        {tab === "security" ? (
          <div className="content__holder">
            <h4>Change Password</h4>
            <div className="input__holder">
              <Input
                label="Current Password"
                type="password"
                placeholder="*********"
              />
              <Input
                label="New Password"
                type="password"
                placeholder="*********"
              />
              <Input
                label="Confirm New Password"
                type="password"
                placeholder="*********"
              />
            </div>
            <div className="button__holder">
              <Button title="Update" />
              <Button
                title="Cancel"
                btnStyle={{ backgroundColor: "#FF000080" }}
              />
            </div>
          </div>
        ) : (
          <div className="personal__container">
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1627925104/P8iXlJ7x_400x400_f7xbus.jpg"
              alt=""
            />
            <div className="profile__grid">
              <div className="profile__dets">
                <p className="profile__name">{udata?.name}</p>
                <p className="profile__mail">{udata?.email}</p>
              </div>
              <div className="profile__status">
                <p>ACTIVE</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default General
