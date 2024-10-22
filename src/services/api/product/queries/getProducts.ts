import { ApiInstance, QueryOpt } from '@/types/api/types.ts';
import { ProductResponsePagedResult } from '@/types/swaggerClient.ts';
import { useApi } from '@/services/contexts/ApiContext.tsx';
import { useQuery } from '@tanstack/react-query';
import { productKeys } from '@/services/api/product/keys.ts';

const getProducts = async (
  api: ApiInstance,
  pageNumber: number = 1,
  pageSize: number = 20,
) => {
  const result = await api.get<ProductResponsePagedResult[]>(`products`, {
    params: { pageNumber, pageSize },
  });
  return result.data;
};

export const useQueryGetProducts = (
  pageNumber: number = 1,
  pageSize: number = 10,
  options?: QueryOpt<ProductResponsePagedResult[]>,
) => {
  const api = useApi();

  return useQuery({
    queryKey: [productKeys.byPage(pageNumber, pageSize)],
    queryFn: () => getProducts(api, pageNumber, pageSize),
    ...options,
  });
};
