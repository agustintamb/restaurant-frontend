import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import productsData from "@/mocks/productsData.json";
import { ICategory, IProduct } from "@/types";
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
  const [categories] = useState<ICategory[]>(productsData.categories);
  const [products] = useState<IProduct[]>(productsData.products);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);

  // Buscar subcategoría en la URL si existe
  const searchParams = new URLSearchParams(location.search);
  const subcategoryParam = searchParams.get("subcategory");

  // Encontrar nombre de la categoría actual
  const currentCategory = categoria
    ? categories.find((cat) => cat.id === categoria)
    : null;

  // Encontrar nombre de subcategoría si existe
  const currentSubcategory =
    subcategoryParam && currentCategory?.subcategories
      ? currentCategory.subcategories.find((sub) => sub.id === subcategoryParam)
      : null;

  useEffect(() => {
    // Scroll hacia arriba al cambiar de categoría
    window.scrollTo(0, 0);

    // Filtrar productos según la categoría y subcategoría
    let filtered = [...products];

    if (categoria) {
      // Verificar si la categoría existe
      const categoryExists = categories.some((cat) => cat.id === categoria);

      if (categoryExists) {
        filtered = products.filter(
          (product) => product.categoryId === categoria
        );

        // Si hay una subcategoría en la URL, filtrar por ella
        if (subcategoryParam)
          filtered = filtered.filter(
            (product) => product.subcategoryId === subcategoryParam
          );
      }
    }

    setFilteredProducts(filtered);

    // Animación de entrada
    const productsGrid = document.querySelector(".products-grid");
    if (productsGrid) productsGrid.classList.add("fade-in");

    return () => {
      if (productsGrid) productsGrid.classList.remove("fade-in");
    };
  }, [categoria, subcategoryParam, categories, products]);

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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
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
