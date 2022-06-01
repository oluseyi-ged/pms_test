/* eslint-disable @next/next/no-img-element */
import React, { FC, useState } from "react"
import { logout } from "slices/auth"
import { useAppDispatch } from "store"
import Input from "../Input"
// import { Subscribe, Footer, Download } from '@modules/application';
import { Container } from "./styles"

interface Props {}

const Navbar: FC<Props> = ({}) => {
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
  }
  const [miniMenu, setMiniMenu] = useState(false)

  return (
    <Container>
      <div className="container">
        <img
          src="https://res.cloudinary.com/odd-developer/image/upload/v1654120969/burger_qtlu47.svg"
          alt=""
        />
        <div className="search__container">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1654120969/search_ovdonu.svg"
            alt=""
          />
          <Input placeholder="Search" style={{ border: "none" }} />
        </div>
        <div className="acct__img">
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1654120969/notif_vg9msx.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/odd-developer/image/upload/v1654120969/avatar_iz57qn.svg"
            alt=""
            onClick={() => setMiniMenu((prevCheck) => !prevCheck)}
          />
        </div>
      </div>

      {miniMenu && (
        <div className="second__container">
          <p>
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1654122185/Icon_qdstez.svg"
              alt=""
            />{" "}
            Profile
          </p>
          <p onClick={handleLogout}>
            <img
              src="https://res.cloudinary.com/odd-developer/image/upload/v1654122185/log_opppy9.svg"
              alt=""
            />
            Logout
          </p>
        </div>
      )}
    </Container>
  )
}

export default Navbar
