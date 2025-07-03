import { useEffect, useMemo } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useMenu } from "@/hooks/useMenu";
import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  MenuContainer,
  MenuTitle,
  MenuSubtitle,
  ProductsGrid,
  NoProductsMessage,
} from "./Menu.styles";

const Menu = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const location = useLocation();
  const {
    categories,
    dishes,
    isLoadingCategories,
    isLoadingDishes,
    error,
    loadDishes,
    findCategoryBySlug,
  } = useMenu();

  // Buscar subcategoría en la URL si existe
  const searchParams = new URLSearchParams(location.search);
  const subcategoryParam = searchParams.get("subcategory");

  // Encontrar categoría y subcategoría actuales usando nameSlug
  const currentCategory = categoria ? findCategoryBySlug(categoria) : null;

  const currentSubcategory = useMemo(() => {
    if (!subcategoryParam || !currentCategory?.subcategories) return null;
    return currentCategory.subcategories.find(
      (sub) => sub.nameSlug === subcategoryParam
    );
  }, [subcategoryParam, currentCategory]);

  // Cargar platos cuando cambien los filtros
  useEffect(() => {
    const filters: Record<string, string> = {};
    if (currentCategory) filters.categoryId = currentCategory._id;
    if (currentSubcategory) filters.subcategoryId = currentSubcategory._id;
    loadDishes(filters);
  }, [currentCategory, currentSubcategory]);

  // Scroll al cambiar filtros
  useEffect(() => {
    window.scrollTo(0, 0);
    const productsGrid = document.querySelector(".products-grid");
    if (productsGrid) productsGrid.classList.add("fade-in");
  }, [categoria, subcategoryParam]);

  if (isLoadingCategories) {
    return (
      <MenuContainer>
        <MenuTitle>Cargando menú...</MenuTitle>
      </MenuContainer>
    );
  }

  if (error) {
    return (
      <MenuContainer>
        <MenuTitle>Error</MenuTitle>
        <NoProductsMessage>{error}</NoProductsMessage>
      </MenuContainer>
    );
  }

  return (
    <MenuContainer>
      <MenuTitle>Nuestra Carta</MenuTitle>
      <MenuSubtitle>
        {currentCategory
          ? `${currentCategory.name}${
              currentSubcategory ? ` - ${currentSubcategory.name}` : ""
            }`
          : "Todos los platos y bebidas"}
      </MenuSubtitle>

      <CategoryFilter
        categories={categories}
        selectedCategory={categoria || null}
        selectedSubcategory={subcategoryParam || null}
      />

      <ProductsGrid className="products-grid">
        {isLoadingDishes ? (
          // Loading skeleton
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              style={{
                height: "400px",
                backgroundColor: "#f5f5f5",
                borderRadius: "12px",
                animation: "pulse 2s infinite",
              }}
            />
          ))
        ) : dishes.length > 0 ? (
          dishes.map((dish) => <ProductCard key={dish._id} dish={dish} />)
        ) : (
          <NoProductsMessage>
            No se encontraron productos en esta categoría.
          </NoProductsMessage>
        )}
      </ProductsGrid>
    </MenuContainer>
  );
};

export default Menu;
