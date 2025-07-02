import { AxiosResponse } from "axios";
import ServiceBase from "@/service/ServiceBase";
import {
  ICategoriesResponse,
  IDishesResponse,
  IDishResponse,
  GetCategoriesQuery,
  GetDishesQuery,
} from "@/types";

class MenuService extends ServiceBase {
  getCategories = (params?: GetCategoriesQuery) =>
    this.client.get<ResponseType, AxiosResponse<ICategoriesResponse>>(
      "categories",
      {
        params: {
          includeSubcategories: "true",
          includeDeleted: "false",
          limit: "100",
          ...params,
        },
      }
    );

  getDishes = (params?: GetDishesQuery) =>
    this.client.get<ResponseType, AxiosResponse<IDishesResponse>>("dishes", {
      params: {
        includeRelations: "true",
        includeDeleted: "false",
        limit: "100",
        ...params,
      },
    });

  getDishById = (dishId: string) =>
    this.client.get<ResponseType, AxiosResponse<IDishResponse>>(
      `dishes/${dishId}`
    );
}

export default new MenuService();
