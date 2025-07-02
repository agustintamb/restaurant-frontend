import { useNavigate } from "react-router-dom";
import { IProduct } from "@/types";
import { formatPrice } from "@/utils/helpers";
import {
  ProductCardContainer,
  ProductImage,
  ProductContent,
  ProductName,
  ProductDescription,
  ProductIngredients,
  ProductAlergenos,
  ProductPrice,
  AlergenoTag,
  IngredientsList,
} from "./ProductCard.styles";

interface ProductCardProps {
  product: IProduct;
  categoryId: string;
  small?: boolean;
}

const ProductCard = ({
  product,
  categoryId,
  small = false,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(`/menu/${categoryId}/${product.id}`);

  return (
    <ProductCardContainer onClick={handleClick}>
      <ProductImage $small={small}>
        <img src={product.image} alt={product.name} />
      </ProductImage>
      <ProductContent>
        <ProductName $small={small}>{product.name}</ProductName>
        <ProductDescription $small={small}>
          {product.description}
        </ProductDescription>

        {!small && (
          <>
            <ProductIngredients>
              <strong>Ingredientes:</strong>
              <IngredientsList>
                {product.ingredientes.join(", ")}
              </IngredientsList>
            </ProductIngredients>
            {product.alergenos.length > 0 && (
              <ProductAlergenos>
                <strong>Alérgenos:</strong>
                <div>
                  {product.alergenos.map((alergeno, index) => (
                    <AlergenoTag key={index}>{alergeno}</AlergenoTag>
                  ))}
                </div>
              </ProductAlergenos>
            )}
          </>
        )}
        <ProductPrice>{formatPrice(product.precio)}</ProductPrice>
      </ProductContent>
    </ProductCardContainer>
  );
};

export default ProductCard;
