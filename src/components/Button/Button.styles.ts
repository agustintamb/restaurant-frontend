import styled, { css } from "styled-components";
import { ButtonProps, ButtonSize, ButtonVariant } from "./Button.types";

const getButtonSize = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        font-size: 0.875rem;
        padding: 0.4rem 1rem;
      `;
    case "large":
      return css`
        font-size: 1.125rem;
        padding: 0.8rem 2rem;
      `;
    case "medium":
    default:
      return css`
        font-size: 1rem;
        padding: 0.6rem 1.5rem;
      `;
  }
};

const getButtonVariant = (variant: ButtonVariant) => {
  switch (variant) {
    case "secondary":
      return css`
        background-color: var(--mui-palette-secondary-main);
        color: #6d3014;
        border: 1px solid var(--mui-palette-secondary-main);

        &:hover {
          background-color: #e9d3a8;
          border-color: #e9d3a8;
        }

        &:active {
          background-color: #b99051;
          border-color: #b99051;
        }
      `;
    case "outline":
      return css`
        background-color: transparent;
        color: var(--mui-palette-primary-main);
        border: 1px solid var(--mui-palette-primary-main);

        &:hover {
          background-color: rgba(141, 73, 37, 0.05);
        }

        &:active {
          background-color: rgba(141, 73, 37, 0.1);
        }
      `;
    case "text":
      return css`
        background-color: transparent;
        color: var(--mui-palette-primary-main);
        border: none;
        padding-left: 0.5rem;
        padding-right: 0.5rem;

        &:hover {
          background-color: rgba(141, 73, 37, 0.05);
        }

        &:active {
          background-color: rgba(141, 73, 37, 0.1);
        }
      `;
    case "primary":
    default:
      return css`
        background-color: var(--mui-palette-primary-main);
        color: var(--mui-palette-background-default);
        border: 1px solid var(--mui-palette-primary-main);

        &:hover {
          background-color: var(--mui-palette-primary-light);
          border-color: var(--mui-palette-primary-light);
        }

        &:active {
          background-color: #6d3014;
          border-color: #6d3014;
        }
      `;
  }
};

type StyledButtonProps = Pick<ButtonProps, "variant" | "size" | "fullWidth">;

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-family: "Lora", serif;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size = "medium" }) => getButtonSize(size)};
  ${({ variant = "primary" }) => getButtonVariant(variant)};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(141, 73, 37, 0.3);
  }
`;
