import { useQuery } from '@tanstack/react-query';
import { ApiInstance, QueryOpt } from '@/types/api/types.ts';
import { productKeys } from '../keys.ts';
import { ProductResponse } from '@/types/swaggerClient.ts';
import { useApi } from '@/services/contexts/ApiContext.tsx';

const getProduct = async (api: ApiInstance, productId: string) => {
  const result = await api.get<ProductResponse>(`products/${productId}`);
  return result.data;
};

export const useQueryGetProduct = (
  productId: string,
  options?: QueryOpt<ProductResponse>,
) => {
  const api = useApi();

  return useQuery({
    queryKey: productKeys.byId(productId),
    queryFn: () => getProduct(api, productId),
    ...options,
  });
};
