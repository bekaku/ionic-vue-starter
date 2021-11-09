import { AxiosMethod, ApiResponse } from "../interface/Common";
import { DefaultApiEndpoint, DefaultAxiosHeader } from "@/config/config";
import axios, { AxiosInstance } from "axios";
export default class Service {
  // constructor() {}

  getUserTokenKey(): Promise<string> {
    // const currentUser = await getCurrentUser();
    return new Promise((resove) => {
      //   resove(currentUser ? `Bearer ${currentUser.apiKey}` : '');
      resove(`Bearer your_jwt_token`);
    });
  }
  async getDefaultAxios(header?: any | undefined): Promise<AxiosInstance> {
    const token = await this.getUserTokenKey();
    const defaultHeader = Object.assign(DefaultAxiosHeader, {
      Authorization: token,
    });
    const defaultAxios = axios.create({
      baseURL: DefaultApiEndpoint,
      withCredentials: false,
      headers: header ? header : defaultHeader,
      timeout: 60 * 1000,
    });
    // defaultAxios.defaults.headers.Authorization = await this.getUserTokenKey();
    // defaultAxios.defaults.headers.get.Authorization = await this.getUserTokenKey();
    return new Promise((resove) => {
      resove(defaultAxios);
    });
  }
  callApiGet(url: string) {
    return this.callApi(AxiosMethod.GET, url, null);
  }

  callApiPost<T>(url: string, postData: T) {
    return this.callApi<T>(AxiosMethod.POST, url, postData);
  }

  callApiPut<T>(url: string, postData: T) {
    return this.callApi<T>(AxiosMethod.PUT, url, postData);
  }

  callApiDelete(url: string) {
    return this.callApi(AxiosMethod.DELETE, url, null);
  }
  async callApi<T>(
    method: AxiosMethod,
    url: string,
    postData: T
  ): Promise<ApiResponse> {
    const axiosApi = await this.getDefaultAxios();
    const response: ApiResponse = {
      response: null,
      error: null,
    };

    if (!axiosApi) {
      return new Promise((resolve) => {
        resolve(response);
      });
    }
    console.log(axiosApi.defaults.baseURL + url);
    console.log("Service.ts > callApi ", axiosApi.defaults.headers);
    try {
      switch (method) {
        case AxiosMethod.POST:
          response.response = await axiosApi
            .post(url, postData)
            .then((result: any) => result.data);
          return new Promise((resolve) => {
            resolve(response);
          });
        case AxiosMethod.PUT:
          response.response = await axiosApi
            .put(url, postData)
            .then((result: any) => result.data);
          return new Promise((resolve) => {
            resolve(response);
          });
        case AxiosMethod.DELETE:
          response.response = await axiosApi
            .delete(url)
            .then((result: any) => result.data);
          return new Promise((resolve) => {
            resolve(response);
          });
        default:
          response.response = await axiosApi
            .get(url)
            .then((result: any) => result.data);
          return new Promise((resolve) => {
            resolve(response);
          });
      }
    } catch (errors) {
      if (errors instanceof Error) {
        response.error = `${url} \n ${errors.message}`;
      }
      return new Promise((resolve) => {
        resolve(response);
      });
    }
  }
}
