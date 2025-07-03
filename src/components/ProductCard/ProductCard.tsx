import { useNavigate } from "react-router-dom";
import { IDish } from "@/types";
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
  dish: IDish;
  small?: boolean;
}

const ProductCard = ({ dish, small = false }: ProductCardProps) => {
  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`/menu/${dish.category.nameSlug}/${dish.nameSlug}`);

  return (
    <ProductCardContainer onClick={handleClick}>
      <ProductImage $small={small}>
        <img src={dish.image} alt={dish.name} />
      </ProductImage>
      <ProductContent>
        <ProductName $small={small}>{dish.name}</ProductName>
        <ProductDescription $small={small}>
          {dish.description}
        </ProductDescription>

        {!small && (
          <>
            <ProductIngredients>
              <strong>Ingredientes:</strong>
              <IngredientsList>
                {dish.ingredients.map((ing) => ing.name).join(", ")}
              </IngredientsList>
            </ProductIngredients>
            {dish.allergens.length > 0 && (
              <ProductAlergenos>
                <strong>Alérgenos:</strong>
                <div>
                  {dish.allergens.map((allergen) => (
                    <AlergenoTag key={allergen._id}>
                      {allergen.name}
                    </AlergenoTag>
                  ))}
                </div>
              </ProductAlergenos>
            )}
          </>
        )}
        <ProductPrice>{formatPrice(dish.price)}</ProductPrice>
      </ProductContent>
    </ProductCardContainer>
  );
};

export default ProductCard;
