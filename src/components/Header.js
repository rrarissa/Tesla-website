import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [MenuState, setMenuState] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <img src="/images/logo.svg" alt="" />
      <Menu>{cars && cars.map((car, index) => <a href="#"> {car}</a>)}</Menu>
      <RightMenu>
        <a href="#"> Shop </a>
        <a href="#"> Account </a>
        <a href="#" onClick={() => setMenuState(true)}>
          Menu
        </a>
      </RightMenu>

      <MenuNav show={MenuState}>
        <CloseWrapper>
          <CustomClose onClick={() => setMenuState(false)} />
        </CloseWrapper>
        <li>
          <a href="">Existing Inventory</a>
        </li>
        <li>
          <a href="">Used Inventory</a>
        </li>
        <li>
          <a href="">Trade-In</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
        <li>
          <a href="">Semi</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
        <li>
          <a href="">Utilities</a>
        </li>
        <li>
          <a href="">Energy</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>

        <li>
          <a href="">Find Us</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">Investor Relations</a>
        </li>
      </MenuNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  top: 0;
  left: 30px;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    flex-wrap: no-wrap;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    padding: 0 10px;
    flex-wrap: no-wrap;
    font-weight: bold;
  }
`;

const MenuNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  transition: transform 0.3s ease-in;

  li {
    padding: 20px 0;
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
