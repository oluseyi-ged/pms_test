import React, { FC, useState } from "react"
// import { Subscribe, Footer, Download } from '@modules/application';
import { Container } from "./styles"

interface Props {
  title?: string
  icon?: string
  loading?: boolean
  onClick?: () => void
  btnStyle?: any
  textStyle?: any
}

const Button: FC<Props> = ({
  title,
  icon,
  loading,
  onClick,
  btnStyle,
  textStyle,
}) => {
  return (
    <Container>
      <div className="btn__container" style={btnStyle}>
        <button style={textStyle} onClick={onClick}>
          {title}
        </button>
      </div>
    </Container>
  )
}

export default Button
