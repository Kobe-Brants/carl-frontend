// import { ReturnResultOfEmptyResult } from '@/MyMip';
// import { CreateOrModifyFlowRequest } from '@/api/rest/flow/types';
// import { useRestApi } from '@/context/api/ApiRestContext';
// import { ApiRestInstance } from '@/context/api/types';
// import { UseMutationOptions, useMutation } from '@tanstack/react-query';
//
// const editProduct = async (api: ApiRestInstance, id: number, body: CreateOrModifyFlowRequest) => {
//   await api.put<ReturnResultOfEmptyResult>(`flows/${id}/modify`, body);
// };
//
// export function useMutationModifyFlow(
//   options?: UseMutationOptions<void, Error, { id: number; body: CreateOrModifyFlowRequest }> | undefined,
// ) {
//   const api = useRestApi();
//
//   return useMutation<void, Error, { id: number; body: CreateOrModifyFlowRequest }>({
//     mutationFn: ({ id, body }) => editProduct(api, id, body),
//     ...options,
//   });
// }
