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

    .page__subtext {
      color: #6b51df;
      font-size: 12px;
      padding-bottom: 10px;
      border-bottom: 1px solid #c2c9d1;
    }

    .name__box {
      border-bottom: 1px solid #c2c9d1;
      padding: 24px 0px;

      .name__boxContainer {
        display: flex;
        gap: 50px;
        border: 1px solid #c2c9d1;
        background: #fff;
        padding: 36px;
        border-radius: 10px;
        width: 70%;

        .name__imgContainer {
          height: 150px;
          width: 150px;
          border: 1px solid #c2c9d1;
          border-radius: 50%;
          flex: 0.27;
        }

        .name__inputContainer {
          width: 100%;
          flex: 0.6;

          p {
            color: #2a2ea4;
          }
        }
      }
    }

    .vision__box {
      border-bottom: 1px solid #c2c9d1;
      padding: 24px 0px;

      .vision__input {
        width: 70%;
      }
    }

    .organization__box {
      border-bottom: 1px solid #c2c9d1;
      padding: 24px 0px;

      .organization__input {
        width: 70%;

        .organization__inputGrid {
          display: flex;
          gap: 20px;
        }
      }
    }

    .btn_container {
      width: fit-content;
      margin-top: 20px;
    }
  }
`
