import { ReactNode } from "react";

export interface ICategory {
  _id: string;
  name: string;
  nameSlug: string;
  subcategories?: ISubcategory[];
  createdAt: string;
  isDeleted: boolean;
}

export interface ISubcategory {
  _id: string;
  name: string;
  nameSlug: string;
  category: string;
  createdAt: string;
  isDeleted: boolean;
}

export interface IIngredient {
  _id: string;
  name: string;
}

export interface IAllergen {
  _id: string;
  name: string;
}

export interface IDish {
  _id: string;
  name: string;
  nameSlug: string;
  description: string;
  price: number;
  image: string;
  category: {
    _id: string;
    name: string;
    nameSlug: string;
  };
  subcategory?: {
    _id: string;
    name: string;
    nameSlug: string;
  };
  ingredients: IIngredient[];
  allergens: IAllergen[];
  createdAt: string;
  isDeleted: boolean;
}

// Response interfaces
export interface ICategoriesResponse {
  message: string;
  result: {
    categories: ICategory[];
    totalCategories: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface IDishesResponse {
  message: string;
  result: {
    dishes: IDish[];
    totalDishes: number;
    totalPages: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface IDishResponse {
  message: string;
  result: IDish;
}

export interface GetCategoriesQuery {
  page?: string;
  limit?: string;
  search?: string;
  includeDeleted?: string;
  includeSubcategories?: string;
}

export interface GetDishesQuery {
  page?: string;
  limit?: string;
  search?: string;
  categoryId?: string;
  subcategoryId?: string;
  includeDeleted?: string;
  includeRelations?: string;
}

export interface IFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface IAccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}
export interface IContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface IContactResponse {
  message: string;
  result: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    isRead: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  };
}
