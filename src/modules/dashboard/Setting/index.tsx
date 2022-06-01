/* eslint-disable @next/next/no-img-element */
import React, { FC, useEffect, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Button from "@components/application/Button"
import Link from "next/link"
import Input from "@components/application/Input"
import Profile from "@components/application/Profile"
import General from "@components/application/General"

interface Props {
  setRoute?: any
  setting?: any
  setSetting?: any
}

const Setting: FC<Props> = ({ setRoute, setting, setSetting }) => {
  return (
    <Container>{setting === "system" ? <Profile /> : <General />}</Container>
  )
}

export default Setting
