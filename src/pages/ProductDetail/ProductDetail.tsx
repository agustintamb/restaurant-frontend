import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMenu } from "@/hooks/useMenu";
import { formatPrice } from "@/utils/helpers";
import ProductCardComponent from "@/components/ProductCard/ProductCard";
import Button from "@/components/UI/Button/Button";
import {
  ProductDetailContainer,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductDescription,
  ProductIngredients,
  ProductAlergenos,
  ProductPrice,
  BackButton,
  IngredientsList,
  AlergenoTag,
  SectionTitle,
  CategoryLabel,
  RelatedProductsSection,
  RelatedProductsGrid,
} from "./ProductDetail.styles";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { categoria, producto } = useParams<{
    categoria: string;
    producto: string;
  }>();

  const {
    dishes,
    selectedDish,
    isLoadingDish,
    loadDishById,
    loadDishes,
    clearCurrentDish,
    findCategoryBySlug,
    findDishIdBySlug,
    error,
  } = useMenu();

  const currentCategory = categoria ? findCategoryBySlug(categoria) : null;

  // Productos relacionados (misma categoría, excluyendo el actual)
  const relatedProducts = useMemo(() => {
    if (!selectedDish || dishes.length === 0) return [];
    return dishes.filter((dish) => dish._id !== selectedDish._id).slice(0, 4);
  }, [dishes, selectedDish]);

  const handleBackClick = () => {
    if (currentCategory) navigate(`/menu/${currentCategory.nameSlug}`);
    else navigate("/menu");
  };

  useEffect(() => {
    if (producto && dishes.length > 0) {
      const dishId = findDishIdBySlug(producto);
      if (dishId) loadDishById(dishId);
      else navigate("/menu");
    }
    return () => {
      clearCurrentDish();
    };
  }, [producto, dishes.length, navigate]);

  // Cargar productos relacionados cuando se carga el plato
  useEffect(() => {
    if (selectedDish) {
      if (categoria && selectedDish.category.nameSlug !== categoria) {
        // Verificar si la categoría en la URL coincide
        navigate(
          `/menu/${selectedDish.category.nameSlug}/${selectedDish.nameSlug}`
        );
        return;
      }
      loadDishes({
        categoryId: selectedDish.category._id,
        limit: "5",
      });
    } else if (error) navigate("/menu");
  }, [selectedDish, categoria, navigate, error]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const mainContent = document.querySelector(".main-content");
    if (mainContent) mainContent.classList.add("fade-in");
    return () => {
      if (mainContent) mainContent.classList.remove("fade-in");
    };
  }, [selectedDish]);

  if (isLoadingDish) {
    return (
      <ProductDetailContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
          }}
        >
          <div>Cargando producto...</div>
        </div>
      </ProductDetailContainer>
    );
  }

  if (error || !selectedDish) {
    return (
      <ProductDetailContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            flexDirection: "column",
          }}
        >
          <div>Error al cargar el producto</div>
          <Button
            onClick={() => navigate("/menu")}
            styles={{ marginTop: "1rem" }}
          >
            Volver al menú
          </Button>
        </div>
      </ProductDetailContainer>
    );
  }

  const categoryToShow = currentCategory || {
    name: selectedDish.category.name,
    nameSlug: selectedDish.category.nameSlug,
  };

  return (
    <ProductDetailContainer>
      <BackButton>
        <Button variant="text" onClick={handleBackClick}>
          ← Volver a {categoryToShow.name}
        </Button>
      </BackButton>

      <ProductCard>
        <ProductImage>
          <img src={selectedDish.image} alt={selectedDish.name} />
        </ProductImage>

        <ProductInfo>
          <CategoryLabel>{categoryToShow.name}</CategoryLabel>
          <ProductName>{selectedDish.name}</ProductName>
          <ProductDescription>{selectedDish.description}</ProductDescription>

          <ProductIngredients>
            <SectionTitle>Ingredientes:</SectionTitle>
            <IngredientsList>
              {selectedDish.ingredients.map((ingredient) => (
                <li key={ingredient._id}>{ingredient.name}</li>
              ))}
            </IngredientsList>
          </ProductIngredients>

          {selectedDish.allergens.length > 0 && (
            <ProductAlergenos>
              <SectionTitle>Alérgenos:</SectionTitle>
              <div>
                {selectedDish.allergens.map((allergen) => (
                  <AlergenoTag key={allergen._id}>{allergen.name}</AlergenoTag>
                ))}
              </div>
            </ProductAlergenos>
          )}

          <ProductPrice>{formatPrice(selectedDish.price)}</ProductPrice>
        </ProductInfo>
      </ProductCard>

      {relatedProducts.length > 0 && (
        <RelatedProductsSection>
          <h3>También te puede interesar</h3>
          <RelatedProductsGrid>
            {relatedProducts.map((relatedDish) => (
              <ProductCardComponent
                key={relatedDish._id}
                dish={relatedDish}
                small
              />
            ))}
          </RelatedProductsGrid>
        </RelatedProductsSection>
      )}
    </ProductDetailContainer>
  );
};

export default ProductDetail;
