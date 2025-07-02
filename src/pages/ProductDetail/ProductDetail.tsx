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
    categories,
    dishes,
    selectedDish,
    isLoadingDish,
    loadDishById,
    loadDishes,
    clearCurrentDish,
    error,
  } = useMenu();

  // Adaptar el plato seleccionado para compatibilidad
  const adaptedProduct = useMemo(() => {
    if (!selectedDish) return null;

    return {
      ...selectedDish,
      id: selectedDish._id,
      categoryId: selectedDish.category._id,
      subcategoryId: selectedDish.subcategory?._id,
      ingredientes: selectedDish.ingredients.map((ing) => ing.name),
      alergenos: selectedDish.allergens.map((all) => all.name),
      precio: selectedDish.price,
      img: selectedDish.image,
    };
  }, [selectedDish]);

  // Encontrar categoría actual
  const currentCategory = useMemo(() => {
    if (!selectedDish) return null;

    const cat = categories.find((c) => c._id === selectedDish.category._id);
    return cat
      ? {
          id: cat._id,
          name: cat.name,
        }
      : null;
  }, [selectedDish, categories]);

  // Adaptar productos relacionados
  const relatedProducts = useMemo(() => {
    if (!selectedDish || dishes.length === 0) return [];
    return dishes
      .filter((dish) => dish._id !== selectedDish._id)
      .slice(0, 4)
      .map((dish) => ({
        ...dish,
        id: dish._id,
        categoryId: dish.category._id,
        subcategoryId: dish.subcategory?._id,
        ingredientes: dish.ingredients.map((ing) => ing.name),
        alergenos: dish.allergens.map((all) => all.name),
        precio: dish.price,
        img: dish.image,
      }));
  }, [dishes, selectedDish]);

  const handleBackClick = () => {
    if (currentCategory) navigate(`/menu/${currentCategory.id}`);
    else navigate("/menu");
  };

  useEffect(() => {
    if (producto) loadDishById(producto);
    return () => {
      clearCurrentDish();
    };
  }, [producto]);

  // Cargar productos relacionados cuando se carga el plato
  useEffect(() => {
    if (selectedDish) {
      if (categoria && selectedDish.category._id !== categoria) {
        // Verificar si la categoría en la URL coincide
        navigate(`/menu/${selectedDish.category._id}/${selectedDish._id}`);
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

  if (error || !adaptedProduct) {
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

  if (!currentCategory) return null;

  return (
    <ProductDetailContainer>
      <BackButton>
        <Button variant="text" onClick={handleBackClick}>
          ← Volver a {currentCategory.name}
        </Button>
      </BackButton>

      <ProductCard>
        <ProductImage>
          <img src={adaptedProduct.image} alt={adaptedProduct.name} />
        </ProductImage>

        <ProductInfo>
          <CategoryLabel>{currentCategory.name}</CategoryLabel>
          <ProductName>{adaptedProduct.name}</ProductName>
          <ProductDescription>{adaptedProduct.description}</ProductDescription>

          <ProductIngredients>
            <SectionTitle>Ingredientes:</SectionTitle>
            <IngredientsList>
              {adaptedProduct.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </IngredientsList>
          </ProductIngredients>

          {adaptedProduct.alergenos.length > 0 && (
            <ProductAlergenos>
              <SectionTitle>Alérgenos:</SectionTitle>
              <div>
                {adaptedProduct.alergenos.map((alergeno, index) => (
                  <AlergenoTag key={index}>{alergeno}</AlergenoTag>
                ))}
              </div>
            </ProductAlergenos>
          )}

          <ProductPrice>{formatPrice(adaptedProduct.precio)}</ProductPrice>
        </ProductInfo>
      </ProductCard>

      {relatedProducts.length > 0 && (
        <RelatedProductsSection>
          <h3>También te puede interesar</h3>
          <RelatedProductsGrid>
            {relatedProducts.map((relatedProduct) => (
              <ProductCardComponent
                key={relatedProduct.id}
                product={relatedProduct}
                categoryId={relatedProduct.categoryId}
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
