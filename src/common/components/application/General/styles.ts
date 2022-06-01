import styled from "styled-components"
// import { colors } from "@components/application/Theme"
// import resp from "@utils/resp"

export const Container = styled.div`
  width: 90%;
  margin: 76px auto;

  .container__modal {
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #6b51df10;
    border-radius: 5px;
    padding: 32px 20px;
    border: 1px solid #6b51df;
    height: fit-content;
  }

  .profile__container {
    h4 {
      color: #242e3e80;
      margin-bottom: 30px;
    }

    .page__menu {
      display: flex;
      gap: 63px;
      font-size: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid #c2c9d1;
    }

    .btn_container {
      width: fit-content;
      margin-top: 20px;
    }

    .tab {
      cursor: pointer;
    }

    .active__tab {
      color: #6b51df;
      cursor: pointer;
    }

    .content__holder {
      background-color: #fff;
      padding: 23px 29px;
      border-radius: 5px;
      margin-top: 30px;

      .input__holder {
        width: 50%;
      }

      .button__holder {
        width: 30%;
        display: flex;
        gap: 27px;
      }
    }
  }

  .personal__container {
    display: flex;
    gap: 30px;
    background-color: #fff;
    width: 60%;
    margin-top: 30px;
    padding: 23px 29px;
    border-radius: 5px;

    img {
      width: 123px;
      border-radius: 50%;
    }

    .profile__grid {
      display: flex;
      gap: 10px;

      .profile__name {
        font-size: 22px;
        color: #242e3e;
      }

      .profile__mail {
        font-weight: lighter;
        font-size: 12px;
      }

      .profile__status {
        background-color: #6b51df33;
        height: fit-content;
        width: fit-content;
        padding: 0 24px;
        border-radius: 25px;
      }
    }
  }
`
