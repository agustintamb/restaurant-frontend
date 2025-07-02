import axios, { AxiosResponse } from "axios";
import { VITE_API_URL } from "@/utils/constants";

export default abstract class ServiceBase {
  protected readonly client;

  constructor() {
    this.client = axios.create({
      baseURL: VITE_API_URL,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    this.setupInterceptors();
  }

  private setupInterceptors() {
    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => Promise.reject(error)
    );
  }
}
