import styled from "styled-components";

interface ScrollButtonProps {
  visible: boolean;
}

export const ScrollButton = styled.button<ScrollButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--mui-palette-primary-main);
  color: var(--mui-palette-background-default);
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--mui-palette-primary-dark);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 20px;
    bottom: 20px;
    right: 20px;
  }
`;
