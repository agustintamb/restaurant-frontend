import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/app/store";
import { GetDishesQuery } from "@/types";
import {
  selectorMenu,
  clearError,
  clearSelectedDish,
  clearDishes,
} from "@/features/menu/slice";
import {
  getCategories,
  getDishes,
  getDishById,
} from "@/features/menu/asyncActions";

export const useMenu = () => {
  const dispatch: AppDispatch = useDispatch();
  const {
    categories,
    dishes,
    selectedDish,
    isLoadingCategories,
    isLoadingDishes,
    isLoadingDish,
    error,
  } = useAppSelector(selectorMenu);

  const loadDishes = (filters: GetDishesQuery = {}) =>
    dispatch(
      getDishes({
        includeRelations: "true",
        includeDeleted: "false",
        limit: "100",
        ...filters,
      })
    );

  const loadDishById = (dishId: string) => dispatch(getDishById(dishId));
  const clearMenuError = () => dispatch(clearError());
  const clearCurrentDish = () => dispatch(clearSelectedDish());
  const clearMenuDishes = () => dispatch(clearDishes());

  // Helper functions para encontrar categorías y platos por slug
  const findCategoryBySlug = (slug: string) =>
    categories.find((cat) => cat.nameSlug === slug);

  const findDishBySlug = (slug: string) =>
    dishes.find((dish) => dish.nameSlug === slug);

  // Función para encontrar ID de plato por slug
  const findDishIdBySlug = (slug: string) => {
    const dish = dishes.find((dish) => dish.nameSlug === slug);
    return dish?._id;
  };

  useEffect(() => {
    if (categories.length === 0)
      dispatch(
        getCategories({
          includeSubcategories: "true",
          includeDeleted: "false",
          limit: "100",
        })
      );
  }, [dispatch, categories.length]);

  return {
    categories,
    dishes,
    selectedDish,
    isLoadingCategories,
    isLoadingDishes,
    isLoadingDish,
    error,
    loadDishes,
    loadDishById,
    findCategoryBySlug,
    findDishBySlug,
    findDishIdBySlug,
    clearMenuError,
    clearCurrentDish,
    clearMenuDishes,
  };
};
