import styled from "styled-components"
// import { colors } from "@components/application/Theme"
// import resp from "@utils/resp"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/odd-developer/image/upload/v1653947302/bg_olaifj.png");
  background-size: cover;
  width: 100%;

  .container__grid {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto 0;

    .container__top {
      background-color: #6b51df;
      padding: 22px 0;
      text-align: center;
      display: flex;
      justify-content: center;
    }

    .container__circle {
      border: 1px solid #fff;
      border-radius: 50%;
      width: fit-content;
      height: fit-content;
      padding: 19px;

      img {
        width: 44px;
        height: 44px;
      }
    }

    .container__bottom {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #fff;
      padding: 30px 0;

      .success__mainText {
        font-size: 20px;
        color: #000;
        margin-bottom: 0;
      }

      .success__subText {
        font-size: 15px;
        color: #242e3e80;
      }

      .button__ctn {
        align-self: center;
      }
    }
  }
`
