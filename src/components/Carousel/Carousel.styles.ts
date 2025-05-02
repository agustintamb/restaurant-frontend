import styled, { keyframes } from "styled-components";

interface CarouselSlideProps {
  active: boolean;
  imageUrl: string;
}

interface CarouselDotProps {
  active: boolean;
}

interface CarouselArrowProps {
  position: "left" | "right";
}

const fadeAnimation = keyframes`
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
`;

const slideInAnimation = keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 400px;
  }

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const CarouselSlide = styled.div<CarouselSlideProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  display: ${(props) => (props.active ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: ${(props) => (props.active ? fadeAnimation : "none")} 1s ease;
`;

export const CarouselOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
`;

export const CarouselContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: 0 2rem;
  color: var(--color-background);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

export const CarouselHeading = styled.h1`
  font-family: --font-family-secondary;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${slideInAnimation} 1s ease 0.3s both;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CarouselSubheading = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  max-width: 640px;
  margin: 0 auto;
  animation: ${slideInAnimation} 1s ease 0.6s both;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
`;

export const CarouselDot = styled.div<CarouselDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--color-background)" : "rgba(255, 248, 231, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.active ? "var(--color-background)" : "rgba(255, 248, 231, 0.8)"};
  }
`;

export const CarouselArrow = styled.button<CarouselArrowProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.position === "left" ? "left: 20px;" : "right: 20px;")}
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--color-background);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 2;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    font-size: 1rem;
  }
`;
