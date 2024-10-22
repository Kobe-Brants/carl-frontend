import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { ApiInstance } from '@/types/api/types.ts';
import { useApi } from '@/services/contexts/ApiContext.tsx';

const deleteProductById = async (api: ApiInstance, productId: string) => {
  const res = await api.delete<boolean>(`products/${productId}`);
  return res.data;
};

export function useMutationDeleteProductById(
  options?: UseMutationOptions<boolean, Error, { productId: string }>,
) {
  const api = useApi();

  return useMutation<boolean, Error, { productId: string }>({
    mutationFn: ({ productId }) => deleteProductById(api, productId),
    ...options,
  });
}
