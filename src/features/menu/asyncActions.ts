import { createAsyncThunk } from "@reduxjs/toolkit";
import { isAxiosError } from "@/utils/isAxiosError";
import { GetCategoriesQuery, GetDishesQuery } from "@/types";
import MenuService from "@/service/menu";

export const getCategories = createAsyncThunk(
  "menu/getCategories",
  async (params: GetCategoriesQuery = {}, { rejectWithValue }) => {
    try {
      const { data } = await MenuService.getCategories(params);
      return data.result.categories;
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response?.data);
      return rejectWithValue("Error al cargar categorías");
    }
  }
);

export const getDishes = createAsyncThunk(
  "menu/getDishes",
  async (params: GetDishesQuery = {}, { rejectWithValue }) => {
    try {
      const { data } = await MenuService.getDishes(params);
      return data.result.dishes;
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response?.data);
      return rejectWithValue("Error al cargar platos");
    }
  }
);

export const getDishById = createAsyncThunk(
  "menu/getDishById",
  async (dishId: string, { rejectWithValue }) => {
    try {
      const { data } = await MenuService.getDishById(dishId);
      return data.result;
    } catch (error) {
      if (isAxiosError(error)) return rejectWithValue(error.response?.data);
      return rejectWithValue("Error al cargar plato");
    }
  }
);
