import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "@/hooks/useOutsideClick";
import { ICategory } from "@/types";
import {
  FilterContainer,
  FilterTitle,
  CategoryChips,
  CategoryChip,
  SubcategoryChips,
  MobileFilterButton,
  MobileFilterContainer,
  MobileFilterContent,
  MobileFilterClose,
} from "./CategoryFilter.styles";

interface CategoryFilterProps {
  categories: ICategory[];
  selectedCategory: string | null;
  selectedSubcategory: string | null;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  selectedSubcategory,
}: CategoryFilterProps) => {
  const navigate = useNavigate();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Referencias para el hook outside click
  const mobileFilterRef = useRef<HTMLDivElement>(null);
  const mobileFilterButtonRef = useRef<HTMLButtonElement>(null);

  const selectedCategoryObj = categories.find(
    (cat) => cat.id === selectedCategory
  );

  // Uso del hook useOutsideClick
  useOutsideClick(
    mobileFilterRef,
    () => {
      if (mobileFilterOpen) setMobileFilterOpen(false);
    },
    [mobileFilterButtonRef] // Excluimos el botón para que el clic en él no cierre el filtro
  );

  const handleCategorySelect = (categoryId: string) => {
    const selectedCat = categories.find((cat) => cat.id === categoryId);
    const hasSubcategories =
      selectedCat?.subcategories && selectedCat.subcategories.length > 0;

    if (categoryId === selectedCategory) {
      navigate("/menu");
      // Solo cerramos si no tiene subcategorías o ya estaba seleccionada
      if (!hasSubcategories) setMobileFilterOpen(false);
    } else {
      navigate(`/menu/${categoryId}`);
      if (!hasSubcategories) setMobileFilterOpen(false);
    }
  };

  const handleSubcategorySelect = (subcategoryId: string) => {
    const categoryWithSub = categories.find((cat) =>
      cat.subcategories?.some((sub) => sub.id === subcategoryId)
    );

    if (categoryWithSub) {
      if (subcategoryId === selectedSubcategory)
        navigate(`/menu/${categoryWithSub.id}`);
      else navigate(`/menu/${categoryWithSub.id}?subcategory=${subcategoryId}`);
    }

    // Cierra el filtro después de seleccionar una subcategoría
    setMobileFilterOpen(false);
  }

  const toggleMobileFilter = () => setMobileFilterOpen(!mobileFilterOpen);

  return (
    <>
      <FilterContainer>
        <FilterTitle>Categorías</FilterTitle>
        <CategoryChips>
          <CategoryChip
            selected={!selectedCategory}
            onClick={() => handleCategorySelect("")}
          >
            Todos
          </CategoryChip>

          {categories.map((category) => (
            <CategoryChip
              key={category.id}
              selected={selectedCategory === category.id}
              onClick={() => handleCategorySelect(category.id)}
            >
              {category.name}
            </CategoryChip>
          ))}
        </CategoryChips>

        {selectedCategoryObj?.subcategories &&
          selectedCategoryObj.subcategories.length > 0 && (
            <SubcategoryChips>
              {selectedCategoryObj.subcategories.map((subcategory) => (
                <CategoryChip
                  key={subcategory.id}
                  selected={selectedSubcategory === subcategory.id}
                  onClick={() => handleSubcategorySelect(subcategory.id)}
                  isSubcategory
                >
                  {subcategory.name}
                </CategoryChip>
              ))}
            </SubcategoryChips>
          )}
      </FilterContainer>

      <MobileFilterButton
        ref={mobileFilterButtonRef}
        onClick={toggleMobileFilter}
      >
        Filtrar por categoría
      </MobileFilterButton>

      <MobileFilterContainer open={mobileFilterOpen}>
        <MobileFilterContent ref={mobileFilterRef}>
          <MobileFilterClose onClick={toggleMobileFilter}>
            &times;
          </MobileFilterClose>
          <FilterTitle>Categorías</FilterTitle>
          <CategoryChips>
            <CategoryChip
              selected={!selectedCategory}
              onClick={() => handleCategorySelect("")}
            >
              Todos
            </CategoryChip>

            {categories.map((category) => (
              <CategoryChip
                key={category.id}
                selected={selectedCategory === category.id}
                onClick={() => handleCategorySelect(category.id)}
              >
                {category.name}
              </CategoryChip>
            ))}
          </CategoryChips>

          {selectedCategoryObj?.subcategories &&
            selectedCategoryObj.subcategories.length > 0 && (
              <>
                <FilterTitle>Subcategorías</FilterTitle>
                <SubcategoryChips>
                  {selectedCategoryObj.subcategories.map((subcategory) => (
                    <CategoryChip
                      key={subcategory.id}
                      selected={selectedSubcategory === subcategory.id}
                      onClick={() => handleSubcategorySelect(subcategory.id)}
                      isSubcategory
                    >
                      {subcategory.name}
                    </CategoryChip>
                  ))}
                </SubcategoryChips>
              </>
            )}
        </MobileFilterContent>
      </MobileFilterContainer>
    </>
  );
};

export default CategoryFilter;
