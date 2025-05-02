import styled from "styled-components";
import { fadeIn } from "@/utils/animations";

export const MenuContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0rem 1.5rem;
  }
`;

export const MenuTitle = styled.h1`
  font-family: --font-family-secondary;
  font-size: 2.8rem;
  font-weight: 700;
  color: var(--color-primary);
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const MenuSubtitle = styled.h2`
  font-family: --font-family-primary;
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-primary-light);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Aseguramos 4 columnas en desktop */
  gap: 2rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(
      3,
      1fr
    ); /* 3 columnas en pantallas medianas */
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en tablets */
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 columna en móviles */
  }
`;

export const NoProductsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  background-color: rgba(215, 179, 119, 0.1);
  border-radius: 12px;
`;
