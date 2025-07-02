import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICategory, IDish } from "@/types";
import { getCategories, getDishes, getDishById } from "./asyncActions";

interface MenuState {
  categories: ICategory[];
  dishes: IDish[];
  selectedDish: IDish | null;
  isLoadingCategories: boolean;
  isLoadingDishes: boolean;
  isLoadingDish: boolean;
  error: string | null;
}

const initialState: MenuState = {
  categories: [],
  dishes: [],
  selectedDish: null,
  isLoadingCategories: false,
  isLoadingDishes: false,
  isLoadingDish: false,
  error: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedDish: (state) => {
      state.selectedDish = null;
    },
    clearDishes: (state) => {
      state.dishes = [];
    },
  },
  extraReducers: (builder) => {
    // Get Categories
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoadingCategories = true;
        state.error = null;
      })
      .addCase(
        getCategories.fulfilled,
        (state, action: PayloadAction<ICategory[]>) => {
          state.isLoadingCategories = false;
          state.categories = action.payload;
          state.error = null;
        }
      )
      .addCase(getCategories.rejected, (state, action) => {
        state.isLoadingCategories = false;
        state.error =
          (action.payload as string) || "Error al cargar categorías";
      });

    // Get Dishes
    builder
      .addCase(getDishes.pending, (state) => {
        state.isLoadingDishes = true;
        state.error = null;
      })
      .addCase(getDishes.fulfilled, (state, action: PayloadAction<IDish[]>) => {
        state.isLoadingDishes = false;
        state.dishes = action.payload;
        state.error = null;
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.isLoadingDishes = false;
        state.error = (action.payload as string) || "Error al cargar platos";
      });

    // Get Dish By Id
    builder
      .addCase(getDishById.pending, (state) => {
        state.isLoadingDish = true;
        state.error = null;
      })
      .addCase(getDishById.fulfilled, (state, action: PayloadAction<IDish>) => {
        state.isLoadingDish = false;
        state.selectedDish = action.payload;
        state.error = null;
      })
      .addCase(getDishById.rejected, (state, action) => {
        state.isLoadingDish = false;
        state.error = (action.payload as string) || "Error al cargar plato";
      });
  },
});

export const { clearError, clearSelectedDish, clearDishes } = menuSlice.actions;

export const selectorMenu = (state: { menu: MenuState }) => state.menu;

export const reducer = menuSlice.reducer;
