import styled from "styled-components";
import { zoomIn } from "@/utils/animations";

export const ProductCardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  animation: ${zoomIn} 0.5s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }

  strong {
    color: var(--mui-palette-primary-main);
    font-weight: 600;
    margin-right: 0.25rem;
    display: block;
    margin-bottom: 0.25rem;
  }
`;

export const ProductImage = styled.div<{ $small?: boolean }>`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ProductCardContainer}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: ${({ $small }) => ($small ? "150px" : "200px")};
  }
`;

export const ProductContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const ProductName = styled.h3<{ $small?: boolean }>`
  font-family: "Playfair Display", serif;
  font-size: ${({ $small }) => ($small ? "1.7rem!important" : "1.4rem")};
  font-weight: 600;
  color: #6d3014;
  margin-bottom: 0.5rem;
  min-height: ${({ $small }) => ($small ? "40px" : "64px")};
  @media (max-width: 768px) {
    min-height: 0px;
    margin-bottom: ${({ $small }) => ($small ? "0.5rem!important" : "1rem")};
    font-size: ${({ $small }) => ($small ? "1.2rem!important" : "1.2rem")};
    &:after {
      display: ${({ $small }) => ($small ? "none" : "block")};
    }
  }
`;

export const ProductDescription = styled.p<{ $small?: boolean }>`
  font-size: 0.95rem;
  color: var(--mui-palette-text-secondary);
  line-height: 1.4;
  margin-bottom: 0.75rem;
  min-height: 60px;
  @media (max-width: 768px) {
    margin-bottom: 0rem;
    min-height: 52px;
  }
`;

export const ProductIngredients = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  min-height: 64px;
  strong {
    color: var(--mui-palette-primary-main);
    font-weight: 600;
    margin-right: 0.25rem;
  }
  @media (max-width: 768px) {
    min-height: 0px;
  }
`;

export const IngredientsList = styled.span`
  color: var(--mui-palette-text-secondary);
`;

export const ProductAlergenos = styled.div`
  font-size: 0.85rem;
  margin-bottom: 0.75rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

export const AlergenoTag = styled.span`
  background-color: rgba(141, 73, 37, 0.1);
  color: var(--mui-palette-primary-main);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

export const ProductPrice = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
  color: var(--mui-palette-primary-main);
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid rgba(141, 73, 37, 0.1);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
