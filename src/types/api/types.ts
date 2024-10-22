import { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestConfig = AxiosRequestConfig & {
  disableTokenInBody?: boolean;
};

export interface ApiInstance {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: RequestConfig,
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: RequestConfig,
  ): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: RequestConfig,
  ): Promise<R>;
}

export interface PagedResult<T> {
  data: T;
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}
