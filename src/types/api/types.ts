import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { UseQueryOptions } from '@tanstack/react-query';

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

export type QueryOpt<Response> = Omit<
  UseQueryOptions<Response, any, Response, any[]>,
  'queryKey'
> & {
  queryKey?: any[];
};
