import styled from "styled-components";
import { fadeIn } from "@/utils/animations";

interface HeaderContainerProps {
  scrolled: boolean;
}

interface NavLinkProps {
  active: boolean;
}

interface MobileMenuProps {
  open: boolean;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ scrolled }) => (scrolled ? "0.5rem 2rem" : "1rem 2rem")};
  background-color: ${({ scrolled }) => (scrolled ? "var(--color-background)" : "var(--color-background)")};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: ${({ scrolled }) => (scrolled ? "0.5rem 1rem" : "1rem 2rem")};
  }
`;

export const Logo = styled.div`
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    height: 50px;
    object-fit: contain;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  font-family: --font-family-primary;
  font-size: 1.1rem;
  font-weight: ${({ active }) => (active ? "600" : "400")};
  color: ${({ active }) => (active ? "var(--color-primary)" : "#333")};
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    width: ${({ active }) => (active ? "100%" : "0")};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--color-primary);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--color-primary);

    &:after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    height: 3px;
    width: 100%;
    background-color: var(--color-primary);
    border-radius: 10px;
    transition: all 0.3s ease;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 300px;
  height: 100vh;
  background-color: var(--color-background);
  padding: 5rem 2rem;
  z-index: 999;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  box-shadow: ${({ open }) =>
    open ? "-5px 0 15px rgba(0, 0, 0, 0.1)" : "none"};

  ${NavLink} {
    margin: 1rem 0;
    font-size: 1.3rem;
  }
`;
