import { AxiosError, AxiosRequestConfig } from 'axios';
import React, { ReactNode, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiInstance, RequestConfig } from '../../types/api/types.ts';
import { useAuthContext } from './AuthContext.tsx';
import { axiosInstance } from '../../configs/axios.config.ts';

export const ApiContext = React.createContext<ApiInstance>(axiosInstance);

const addTokenToBody = (
  requestConfig: RequestConfig,
  token: string | null,
): AxiosRequestConfig => {
  if (!token || requestConfig.disableTokenInBody) return requestConfig;

  return {
    ...requestConfig,
    headers: { Authorization: `Bearer ${token}`, ...requestConfig.headers },
  };
};

const getValidationErrorFromBody = (axiosError: AxiosError) => {
  console.log(axiosError);
  let errorMessage = 'TODO: Get validation error';

  return errorMessage;
};

interface ApiRestProviderProps {
  children: ReactNode;
}

export const ApiContextProvider = ({ children }: ApiRestProviderProps) => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleError = useCallback(
    (axiosError: AxiosError) => {
      let localError = axiosError as Error;

      if (
        axiosError.response?.status === 0 ||
        axiosError.message.includes('Network Error')
      ) {
        localError = new Error('There is a problem with the network');
      } else if (axiosError.response?.status === 401) {
        logout().then(() => navigate('/login'));
      } else if (axiosError.response?.status === 400) {
        localError = new Error(getValidationErrorFromBody(axiosError));
      } else {
        localError = new Error(axiosError.message);
      }

      throw localError;
    },
    [logout],
  );

  const wrappedApi: ApiInstance = useMemo(() => {
    return {
      get: async (url: string, requestConfig: RequestConfig) => {
        try {
          return await axiosInstance.get(
            url,
            addTokenToBody(requestConfig, 'TODO'),
          );
        } catch (err) {
          return handleError(err as AxiosError);
        }
      },
      post: async (
        url: string,
        requestData: any,
        requestConfig: RequestConfig,
      ) => {
        try {
          return axiosInstance.post(
            url,
            requestData,
            addTokenToBody(requestConfig, 'TODO'),
          );
        } catch (err) {
          return handleError(err as AxiosError);
        }
      },
      delete: async (url: string, requestConfig: RequestConfig) => {
        try {
          return await axiosInstance.delete(
            url,
            addTokenToBody(requestConfig, 'TODO'),
          );
        } catch (err) {
          return handleError(err as AxiosError);
        }
      },
      put: async (
        url: string,
        requestData: any,
        requestConfig: RequestConfig,
      ) => {
        try {
          return await axiosInstance.put(
            url,
            requestData,
            addTokenToBody(requestConfig, 'TODO'),
          );
        } catch (err) {
          return handleError(err as AxiosError);
        }
      },
    };
  }, [handleError]);
  return (
    <ApiContext.Provider value={wrappedApi}>{children}</ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};
