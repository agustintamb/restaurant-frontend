export interface ICategory {
  id: string;
  name: string;
  subcategories?: ISubcategory[];
}

export interface ISubcategory {
  id: string;
  name: string;
}

export interface IProduct {
  id: string;
  categoryId: string;
  subcategoryId?: string;
  name: string;
  description: string;
  ingredientes: string[];
  alergenos: string[];
  precio: number;
  img: string;
}

export interface IFAQItem {
  id: string;
  question: string;
  answer: string;
}