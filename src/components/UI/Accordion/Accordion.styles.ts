import styled from "styled-components";

interface AccordionItemProps {
  expanded: boolean;
}

interface AccordionContentProps {
  expanded: boolean;
}

interface AccordionIconProps {
  expanded: boolean;
}

export const AccordionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const AccordionTitle = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 2rem;
  text-align: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 3px;
    background-color: var(--color-secondary);
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const AccordionItem = styled.div<AccordionItemProps>`
  background-color: var(--color-paper);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid
    ${(props) =>
      props.expanded ? "var(--color-secondary)" : "rgba(0, 0, 0, 0.05)"};
  box-shadow: ${(props) =>
    props.expanded
      ? "0 4px 15px rgba(0, 0, 0, 0.1)"
      : "0 2px 5px rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const AccordionHeader = styled.div`
  padding: 1.25rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-primary-dark);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

export const AccordionContent = styled.div<AccordionContentProps>`
  padding: ${(props) => (props.expanded ? "0 1.25rem 1.25rem" : "0 1.25rem")};
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
  max-height: ${(props) => (props.expanded ? "1000px" : "0")};
  opacity: ${(props) => (props.expanded ? 1 : 0)};
  transition: all 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: ${(props) => (props.expanded ? "0 1rem 1rem" : "0 1rem")};
    font-size: 0.95rem;
  }
`;

export const AccordionIcon = styled.span<AccordionIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: ${(props) =>
    props.expanded ? "var(--color-secondary)" : "var(--color-primary)"};
  color: var(--color-paper);
  border-radius: 50%;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  transition: all 0.3s ease;
`;
