/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Button from "@components/application/Button"
import Link from "next/link"

interface Props {
  setRoute?: any
}

const Dashboard: FC<Props> = ({ setRoute }: any) => {
  return (
    <Container>
      <div className="container__modal">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1654099542/bulb-removebg-preview_1_ccyxap.svg"
          alt=""
        />
        <div>
          <p style={{ color: "#242E3E80" }}>
            PMS is very simple, Zojatech Ltd. Complete your organization
            profile.
          </p>
          <Button
            title="Complete Profile"
            btnStyle={{ width: "200px" }}
            textStyle={{ fontWeight: "bold" }}
            onClick={() => setRoute("settings")}
          />
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
