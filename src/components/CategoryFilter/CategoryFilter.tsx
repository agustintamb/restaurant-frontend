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
    (cat) => cat.nameSlug === selectedCategory
  );

  // Uso del hook useOutsideClick
  useOutsideClick(
    mobileFilterRef,
    () => {
      if (mobileFilterOpen) setMobileFilterOpen(false);
    },
    [mobileFilterButtonRef]
  );

  const handleCategorySelect = (categorySlug: string) => {
    const selectedCat = categories.find((cat) => cat.nameSlug === categorySlug);
    const hasSubcategories =
      selectedCat?.subcategories && selectedCat.subcategories.length > 0;

    if (categorySlug === selectedCategory) {
      navigate("/menu");
      // Solo cerramos si no tiene subcategorías o ya estaba seleccionada
      if (!hasSubcategories) setMobileFilterOpen(false);
    } else {
      navigate(`/menu/${categorySlug}`);
      if (!hasSubcategories) setMobileFilterOpen(false);
    }
  };

  const handleSubcategorySelect = (subcategorySlug: string) => {
    const categoryWithSub = categories.find((cat) =>
      cat.subcategories?.some((sub) => sub.nameSlug === subcategorySlug)
    );

    if (categoryWithSub) {
      if (subcategorySlug === selectedSubcategory)
        navigate(`/menu/${categoryWithSub.nameSlug}`);
      else
        navigate(
          `/menu/${categoryWithSub.nameSlug}?subcategory=${subcategorySlug}`
        );
    }

    // Cierra el filtro después de seleccionar una subcategoría
    setMobileFilterOpen(false);
  };

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
              key={category._id}
              selected={selectedCategory === category.nameSlug}
              onClick={() => handleCategorySelect(category.nameSlug)}
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
                  key={subcategory._id}
                  selected={selectedSubcategory === subcategory.nameSlug}
                  onClick={() => handleSubcategorySelect(subcategory.nameSlug)}
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
                key={category._id}
                selected={selectedCategory === category.nameSlug}
                onClick={() => handleCategorySelect(category.nameSlug)}
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
                      key={subcategory._id}
                      selected={selectedSubcategory === subcategory.nameSlug}
                      onClick={() =>
                        handleSubcategorySelect(subcategory.nameSlug)
                      }
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
