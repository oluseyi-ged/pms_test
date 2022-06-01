/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react"
// import { Subscribe, Footer, Download } from "@modules/application"
import { Container } from "./styles"

interface Props {
  type?: string
  placeholder?: string
  icon?: string
  onChange?: (e: any) => void
  value?: any | string | number
  style?: any
  suffix?: string
  prefix?: string
  max?: number
  title?: string
  onFocus?(): void
  autoFocus?: boolean
  disabled?: boolean
  label?: string
  error?: string
  onBlur?: any
  //   passwordHint?: boolean;
}

const Input: FC<Props> = ({
  type,
  placeholder,
  icon,
  onChange,
  value,
  style,
  suffix,
  prefix,
  max,
  title,
  onFocus,
  autoFocus,
  disabled,
  label,
  error,
  onBlur,
}) => {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown)
  }

  return (
    <Container>
      <p className="input__label">{label}</p>
      <div className="input__container" style={style}>
        {type === "password" ? (
          <input
            type={passwordShown ? "text" : "password"}
            placeholder={placeholder}
            autoFocus={autoFocus}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            autoFocus={autoFocus}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        {type === "password" ? (
          <div onClick={togglePassword}>
            {passwordShown ? (
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1653948706/Vector_zmjebo.svg"
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            ) : (
              <img
                src="https://res.cloudinary.com/odd-developer/image/upload/v1653948706/Vector_zmjebo.svg"
                alt=""
                style={{ width: "15px", height: "15px" }}
              />
            )}
          </div>
        ) : null}
      </div>
      <p className="input__error">{error}</p>
    </Container>
  )
}

export default Input
