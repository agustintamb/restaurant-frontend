import styled from "styled-components";
import { fadeIn, slideIn, zoomIn } from "@/utils/animations";

export const ProductDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 0rem 1.5rem;
  }
`;

export const BackButton = styled.div`
  margin-bottom: 2rem;
  animation: ${slideIn} 0.5s ease-out;
  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 3rem;
  animation: ${zoomIn} 0.5s ease-out;

  @media (max-width: 992px) {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export const ProductImage = styled.div`
  width: 45%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 300px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const CategoryLabel = styled.div`
  display: inline-block;
  font-size: 0.9rem;
  color: var(--mui-palette-primary-light);
  margin-bottom: 0.5rem;
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProductName = styled.h1`
  font-family: "Playfair Display", serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--mui-palette-primary-main);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--mui-palette-text-secondary);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--mui-palette-primary-main);
  margin-bottom: 0.75rem;
`;

export const ProductIngredients = styled.div`
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const IngredientsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  li {
    background-color: rgba(215, 179, 119, 0.1);
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: var(--mui-palette-text-secondary);
  }
`;

export const ProductAlergenos = styled.div`
  margin-bottom: 1.5rem;

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const AlergenoTag = styled.span`
  background-color: rgba(141, 73, 37, 0.1);
  color: var(--mui-palette-primary-main);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--mui-palette-primary-main);
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(141, 73, 37, 0.1);

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    padding-top: 0.5rem;
  }
`;

export const RelatedProductsSection = styled.div`
  margin-top: 4rem;
  h3 {
    font-family: "Playfair Display", serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--mui-palette-primary-main);
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      width: 50%;
      height: 2px;
      background-color: var(--mui-palette-secondary-main);
      bottom: -8px;
      left: 0;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0em;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
      font-size: 1.4rem;
      
      &:after {
        width: 100%;
      }
    }
  }
`;

export const RelatedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem;
  }
`;
