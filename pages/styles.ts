import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  background-color: #fff;

  .sideBar {
    /* width: fit-content; */
    padding: 31px 33px;
    height: 100vh;
    flex: 0.15;

    p {
      cursor: pointer;
    }
  }

  .dashboard__logo {
    margin-bottom: 70px;
  }

  .sideBar__subitem {
    padding-left: 35px;

    .activeItem {
      color: #6b51df;
    }
  }

  .activeBar {
    color: #6b51df;
    display: flex;
    align-items: center;
    gap: 25px;

    img {
      width: 20px;
    }
  }

  .sidebarItem {
    display: flex;
    align-items: center;
    gap: 25px;

    img {
      width: 20px;
    }
  }

  .pages {
    flex: 0.85;
    background-color: #6b51df10;
  }
`
