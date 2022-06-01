import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-image: url("https://res.cloudinary.com/odd-developer/image/upload/v1653947302/bg_olaifj.png");
  background-size: cover;
  width: 100%;

  .page__form {
    flex: 0.5;
    margin-bottom: 50px;
    height: fit-content;
    width: fit-content;
    margin: auto 0;
    background: white;
  }

  .page__formContent {
    margin: 0 auto;

    @media (max-width: 1120px) {
      width: 70%;
    }
    @media (max-width: 980px) {
      width: 90%;
    }
  }

  .page__formContent {
    border-radius: 20px;
    padding: 47px 30px;
    text-align: center;

    .page__formTitles {
      padding: 14px 30px;
      padding-bottom: 0px;

      .form__title {
        font-size: 22px;
        /* color: ${({ theme }) => theme.text}; */
        font-weight: bold;
      }

      .form__subTitle {
        font-size: 12px;
        margin-top: 9px;
        /* color: ${({ theme }) => theme.subText}; */
      }
    }

    .page__mainForm {
      padding: 5px 30px 44px 30px;
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 15px;
      align-items: center;

      .page__toRegister {
        width: 100%;
        text-align: left;
        font-size: 15px;
        cursor: pointer;
        color: #242e3e80;

        span {
          color: #6b51df;
        }
      }
    }
  }

  .page__cta {
    width: 100%;
    display: flex;
    font-size: 11px;
    align-items: center;
    justify-content: space-between;
    color: #242e3e80;

    .remeber__me {
      display: flex;
      align-items: center;
      gap: 15px;
    }

    .forgot__pass {
      align-self: flex-start;
      font-size: 11px;
    }
  }
`
