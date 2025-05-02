import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productsData from "@/mocks/productsData.json";
import { IProduct, ICategory } from "@/types";
import { formatPrice } from "@/utils/helpers";
import ProductCardComponent from "@/components/ProductCard/ProductCard";
import Button from "@/components/Button/Button";
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
  const { categoria, producto } = useParams<{
    categoria: string;
    producto: string;
  }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [category, setCategory] = useState<ICategory | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<IProduct[]>([]);

  const handleBackClick = () => {
    if (category) navigate(`/menu/${category.id}`);
    else navigate("/menu");
  };

  // Hace scroll al inicio cuando cambia el producto
  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProduct = productsData.products.find((p) => p.id === producto);

    if (foundProduct) {
      // Verificar si la categoría en la URL coincide con la categoría del producto
      if (categoria && foundProduct.categoryId !== categoria) {
        navigate(`/menu/${foundProduct.categoryId}/${foundProduct.id}`);
        return;
      }

      setProduct(foundProduct);

      // Buscar categoría del producto
      const foundCategory = productsData.categories.find(
        (c) => c.id === foundProduct.categoryId
      );
      if (foundCategory) setCategory(foundCategory);

      // Buscar productos relacionados (misma categoría, excepto el producto actual)
      const related = productsData.products
        .filter(
          (p) =>
            p.categoryId === foundProduct.categoryId && p.id !== foundProduct.id
        )
        .slice(0, 4);
      setRelatedProducts(related);
    } else {
      // Si no se encuentra el producto, redirigir a la página del menú
      navigate("/menu");
    }

    // Animación de entrada
    const mainContent = document.querySelector(".main-content");
    if (mainContent) mainContent.classList.add("fade-in");

    return () => {
      if (mainContent) mainContent.classList.remove("fade-in");
    };
  }, [categoria, producto, navigate]);

  if (!product || !category) return null;

  return (
    <ProductDetailContainer>
      <BackButton>
        <Button variant="text" onClick={handleBackClick}>
          ← Volver a {category.name}
        </Button>
      </BackButton>

      <ProductCard>
        <ProductImage>
          <img src={product.img} alt={product.name} />
        </ProductImage>

        <ProductInfo>
          <CategoryLabel>{category.name}</CategoryLabel>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>

          <ProductIngredients>
            <SectionTitle>Ingredientes:</SectionTitle>
            <IngredientsList>
              {product.ingredientes.map((ingrediente, index) => (
                <li key={index}>{ingrediente}</li>
              ))}
            </IngredientsList>
          </ProductIngredients>

          {product.alergenos.length > 0 && (
            <ProductAlergenos>
              <SectionTitle>Alérgenos:</SectionTitle>
              <div>
                {product.alergenos.map((alergeno, index) => (
                  <AlergenoTag key={index}>{alergeno}</AlergenoTag>
                ))}
              </div>
            </ProductAlergenos>
          )}

          <ProductPrice>{formatPrice(product.precio)}</ProductPrice>
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
