import styled from "styled-components"
import resp from "@utils/resp"

export const Container = styled.div`
  width: 100%;

  .input__label {
    text-align: left;
    color: #242e3e80;
    margin-bottom: 7px;
    font-size: 15px;
  }

  .input__error {
    text-align: left;
    color: red;
    margin-bottom: 7px;
    font-size: 13px;
  }

  .input__container {
    padding: 15px 14px;
    font-size: 12px;
    background-color: ${({ theme }) => theme.light};
    border: 1px solid #d1dcde;
    outline: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  input {
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
  }
`
