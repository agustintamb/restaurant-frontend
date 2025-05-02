import styled from "styled-components";
import { fadeIn } from "@/utils/animations";

export const HomeContainer = styled.div`
  width: 100%;
`;

export const HomeSection = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const AboutContent = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const AboutHeading = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 60px;
    height: 2px;
    background-color: var(--color-secondary);
    bottom: -10px;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
    &:after {
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
    }
  }
`;

export const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CTASection = styled.section`
  background-color: var(--color-primary);
  padding: 4rem 2rem;
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

export const CTAContent = styled.div`
  max-width: 620px;
  margin: 0 auto;
`;

export const CTAHeading = styled.h2`
  font-family: "Playfair Display", serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-background);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const CTAText = styled.p`
  font-size: 1.2rem;
  color: #e9d3a8;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContactSection = styled.section`
  padding: 3rem 2rem;
  background-color: var(--color-background);

  @media (max-width: 768px) {
    padding: 1rem 0rem;
  }
`;

export const FAQSection = styled.section`
  padding: 4rem 2rem;
  background-color: #fff9f5;

  @media (max-width: 768px) {
    padding: 3rem 0.5rem;
  }
`;
