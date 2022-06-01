import styled from "styled-components"
import resp from "@utils/resp"

export const Container = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    align-items: center;
    height: fit-content;
    padding: 0px 42px;
    background-color: #fff;
    box-shadow: 2px 7px 5px 0px rgba(199, 171, 171, 0.75);
    -webkit-box-shadow: 2px 7px 5px 0px rgba(199, 171, 171, 0.75);
    -moz-box-shadow: 2px 7px 5px 0px rgba(199, 171, 171, 0.75);
    position: relative;

    img {
      width: 20px;
    }

    .search__container {
      display: flex;
      flex: 1;
    }

    .acct__img {
      display: flex;
      gap: 20px;

      img {
        cursor: pointer;
      }
    }
  }

  .second__container {
    background-color: #fff;
    width: 200px;
    padding: 15px 10px;
    height: fit-content;
    position: absolute;
    right: 0;

    p {
      display: flex;
      align-items: center;
      gap: 20px;
      justify-content: center;
      cursor: pointer;
    }
  }
`
