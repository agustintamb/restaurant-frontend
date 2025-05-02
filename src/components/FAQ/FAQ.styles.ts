import styled from "styled-components";
import { slideIn } from "@/utils/animations";

interface FAQItemProps {
  active: boolean;
}

interface FAQAnswerProps {
  active: boolean;
}

interface FAQIconProps {
  active: boolean;
}

export const FAQContainer = styled.section`
  max-width: 800px;
  margin: 0 auto;
  padding: 0rem 1.5rem;
  animation: ${slideIn} 0.5s ease-out;
  @media (max-width: 768px) {
    padding: 0rem 0rem;
  }
`;

export const FAQTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--mui-palette-primary-main);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 3px;
    background-color: var(--mui-palette-secondary-main);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.div<FAQItemProps>`
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid
    ${(props) => (props.active ? "var(--mui-palette-secondary-main)" : "rgba(0, 0, 0, 0.05)")};
  box-shadow: ${(props) =>
    props.active
      ? "0 4px 15px rgba(0, 0, 0, 0.1)"
      : "0 2px 5px rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const FAQQuestion = styled.div`
  padding: 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #6d3014;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
    gap: 16px;
  }
`;

export const FAQAnswer = styled.div<FAQAnswerProps>`
  padding: ${(props) => (props.active ? "0 1.25rem 1.25rem" : "0 1.25rem")};
  font-size: 1rem;
  color: var(--mui-palette-text-secondary);
  line-height: 1.6;
  max-height: ${(props) => (props.active ? "500px" : "0")};
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: all 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${(props) => (props.active ? "0 1rem 1rem" : "0 1rem")};
    font-size: 0.95rem;
  }
`;

export const FAQIcon = styled.span<FAQIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  min-width: 24px;
  background-color: ${(props) => (props.active ? "var(--mui-palette-secondary-main)" : "var(--mui-palette-primary-main)")};
  color: #fff;
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  transition: all 0.3s ease;
`;
