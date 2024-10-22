import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { ApiInstance } from '@/types/api/types.ts';
import {
  ProductCreateOrModifyRequest,
  ProductResponse,
} from '@/types/swaggerClient.ts';
import { useApi } from '@/services/contexts/ApiContext.tsx';

const editProduct = async (
  api: ApiInstance,
  productId: string,
  body: ProductCreateOrModifyRequest,
) => {
  await api.put<ProductResponse>(`products/${productId}`, body);
};

export function useMutationEditProduct(
  options?:
    | UseMutationOptions<
        void,
        Error,
        { productId: string; body: ProductCreateOrModifyRequest }
      >
    | undefined,
) {
  const api = useApi();

  return useMutation<
    void,
    Error,
    { productId: string; body: ProductCreateOrModifyRequest }
  >({
    mutationFn: ({ productId, body }) => editProduct(api, productId, body),
    ...options,
  });
}
