import styled from "styled-components"
import resp from "@utils/resp"

export const Container = styled.div`
  width: 100%;
  cursor: pointer;

  .btn__container {
    padding: 15px 14px;
    font-size: 0.9rem;
    background-color: #6b51df;
    border: none;
    outline: none;
    border-radius: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;

    button {
      border: none;
      outline: none;
      background-color: transparent;
      color: white;
      font-size: 14px;
      cursor: pointer;
      width: 100%;
    }
  }
`
