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
  } = useMenu();

  // Buscar subcategoría en la URL si existe
  const searchParams = new URLSearchParams(location.search);
  const subcategoryParam = searchParams.get("subcategory");

  // Adaptar categorías para el componente CategoryFilter (solo las propiedades necesarias)
  const adaptedCategories = useMemo(() => {
    return categories.map((cat) => ({
      id: cat._id,
      name: cat.name,
      subcategories:
        cat.subcategories?.map((sub) => ({
          id: sub._id,
          name: sub.name,
        })) || [],
    }));
  }, [categories]);

  // Encontrar categoría y subcategoría actuales
  const currentCategory = categoria
    ? adaptedCategories.find((cat) => cat.id === categoria)
    : null;

  const currentSubcategory =
    subcategoryParam && currentCategory?.subcategories
      ? currentCategory.subcategories.find((sub) => sub.id === subcategoryParam)
      : null;

  // Adaptar dishes para ProductCard
  const adaptedProducts = useMemo(() => {
    return dishes.map((dish) => ({
      ...dish,
      id: dish._id,
      categoryId: dish.category._id,
      subcategoryId: dish.subcategory?._id,
      ingredientes: dish.ingredients.map((ing) => ing.name),
      alergenos: dish.allergens.map((all) => all.name),
      precio: dish.price,
      img: dish.image,
    }));
  }, [dishes]);

  // Cargar platos cuando cambien los filtros
  useEffect(() => {
    const filters: Record<string, string> = {};
    if (categoria) filters.categoryId = categoria;
    if (subcategoryParam) filters.subcategoryId = subcategoryParam;
    loadDishes(filters);
  }, [categoria, subcategoryParam]);

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
        categories={adaptedCategories}
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
        ) : adaptedProducts.length > 0 ? (
          adaptedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              categoryId={product.categoryId}
            />
          ))
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
