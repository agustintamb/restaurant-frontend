import styled from "styled-components";
import { slideIn } from "@/utils/animations";

interface CategoryChipProps {
  selected: boolean;
  isSubcategory?: boolean;
}

interface MobileFilterContainerProps {
  open: boolean;
}

export const FilterContainer = styled.div`
  margin-bottom: 2rem;
  animation: ${slideIn} 0.5s ease-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FilterTitle = styled.h3`
  font-family: "Playfair Display", serif;
  font-size: 1.3rem;
  color: var(--mui-palette-primary-main);
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;

  &:after {
    content: "";
    position: absolute;
    width: 60%;
    height: 2px;
    background-color: #d7b377;
    bottom: -5px;
    left: 0;
  }
`;

export const CategoryChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  margin-top: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0.75rem;
    margin-bottom: 1.5rem;
    margin-top: 1rem;
  }
`;

export const CategoryChip = styled.div<CategoryChipProps>`
  padding: 0.5rem 1rem;
  background-color: ${({ selected, isSubcategory }) =>
    selected
      ? isSubcategory
        ? "#E9D3A8"
        : "var(--mui-palette-primary-main)"
      : "#FFF"};
  color: ${({ selected, isSubcategory }) =>
    selected
      ? isSubcategory
        ? "#6D3014"
        : "#FFF"
      : "var(--mui-palette-primary-main)"};
  border: 1px solid
    ${({ isSubcategory }) =>
      isSubcategory ? "#E9D3A8" : "var(--mui-palette-primary-main)"};
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isSubcategory, selected }) =>
      selected
        ? isSubcategory
          ? "#E9D3A8"
          : "var(--mui-palette-primary-main)"
        : isSubcategory
        ? "rgba(233, 211, 168, 0.1)"
        : "rgba(141, 73, 37, 0.1)"};
  }
`;

export const SubcategoryChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

export const MobileFilterButton = styled.button`
  display: none;
  padding: 0.8rem 1.5rem;
  background-color: var(--mui-palette-primary-main);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-family: "Lora", serif;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileFilterContainer = styled.div<MobileFilterContainerProps>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileFilterContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--mui-palette-background-default);
  padding: 2rem;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  transform: translateY(0);
  animation: ${slideIn} 0.3s ease-out;
  max-height: 80vh;
  overflow-y: auto;
`;

export const MobileFilterClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--mui-palette-primary-main);
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
