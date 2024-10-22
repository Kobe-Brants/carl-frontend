import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { ApiInstance } from '@/types/api/types.ts';
import {
  ProductCreateOrModifyRequest,
  ProductResponse,
} from '@/types/swaggerClient.ts';
import { useApi } from '@/services/contexts/ApiContext.tsx';

const createProduct = async (
  api: ApiInstance,
  body: ProductCreateOrModifyRequest,
) => {
  await api.post<ProductResponse>(`products`, body);
};

export function useMutationCreateProduct(
  options?: UseMutationOptions<
    void,
    Error,
    { body: ProductCreateOrModifyRequest }
  >,
) {
  const api = useApi();

  return useMutation<void, Error, { body: ProductCreateOrModifyRequest }>({
    mutationFn: ({ body }) => createProduct(api, body),
    ...options,
  });
}
