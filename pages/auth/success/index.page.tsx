/* eslint-disable @next/next/no-img-element */
import React from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"
import Input from "@components/application/Input"
import Button from "@components/application/Button"
import { useRouter } from "next/router"

const Success = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/auth/login")
  }

  return (
    <Container>
      <div className="container__grid">
        <div className="container__top">
          <div className="container__circle">
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1653952107/tick_z4qxi0.svg"
              alt=""
            />
          </div>
        </div>
        <div className="container__bottom">
          <p className="success__mainText">Awesome!</p>
          <p className="success__subText">
            Your organization has been successfully created.
          </p>
          <div className="button__ctn">
            <Button
              title="Go to Login"
              btnStyle={{
                width: "fit-content",
                borderRadius: "30px",
                height: "fit-content",
              }}
              onClick={() => router.push("/auth/login")}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Success
