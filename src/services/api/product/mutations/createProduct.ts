// import { UseMutationOptions, useMutation } from '@tanstack/react-query';
//
// const createProduct = async (
//   api: ApiRestInstance,
//   body: CreateOrModifyFlowRequest,
// ) => {
//   await api.post<ReturnResultOfEmptyResult>(`products`, body);
// };
//
// export function useMutationCreateProduct(
//   options?:
//     | UseMutationOptions<void, Error, { body: CreateOrModifyFlowRequest }>
//     | undefined,
// ) {
//   const api = useRestApi();
//
//   return useMutation<void, Error, { body: CreateOrModifyFlowRequest }>({
//     mutationFn: ({ body }) => createProduct(api, body),
//     ...options,
//   });
// }
