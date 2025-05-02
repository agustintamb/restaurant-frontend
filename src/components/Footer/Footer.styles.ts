import styled from "styled-components";
import { fadeIn } from "@/utils/animations";

export const FooterContainer = styled.footer`
  background-color: var(--mui-palette-primary-main);
  color: var(--mui-palette-background-default);
  padding: 3rem 2rem 1.5rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    justify-content: flex-start;
    gap: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  max-width: 260px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

export const FooterLogo = styled.div`
  margin-bottom: 1rem;

  img {
    height: 60px;
    object-fit: contain;
  }
`;

export const FooterTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #d7b377;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 40px;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #d7b377;
  }
`;

export const FooterText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;

  strong {
    font-weight: 600;
    color: #e9d3a8;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  cursor: pointer;

  i {
    color: var(--mui-palette-background-default);
    font-size: 1.2rem;
  }

  &:hover {
    background-color: var(--mui-palette-primary-dark);
    transform: translateY(-3px);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`;
