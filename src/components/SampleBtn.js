import { React, useState, memo } from "react";
import styled from "styled-components";

const StyledButton = memo(styled.button`
  background-color: ${({ isActive }) => (isActive ? "#0080F5" : "#d9d9d9")};
  margin-top: 20px;
  margin-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  font-size: 12px;
  font-family: "Questrial";

  color: ${({ isActive }) => (isActive ? "white" : "black")};
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#0762b8" : "#b0b0b0")};
  }

  &:active {
    background-color: ${({ isActive }) => (isActive ? "#0080F5" : "#d9d9d9")};
  }
`);
const ToggleButton = ({ name, value, upperFunction }) => {
  const [isActive, setIsActive] = useState(false);
  function handleClick() {
    setIsActive(!isActive);
    upperFunction({ target: { name, value } });
  }

  return (
    <StyledButton type="button" isActive={isActive} onClick={handleClick}>
      {value}
    </StyledButton>
  );
};

export default ToggleButton;
