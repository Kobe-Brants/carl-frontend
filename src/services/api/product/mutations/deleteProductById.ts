// import { useRestApi } from '@/context/api/ApiRestContext';
// import { ApiRestInstance } from '@/context/api/types';
// import { UseMutationOptions, useMutation } from '@tanstack/react-query';
//
// const deleteFlowById = async (api: ApiRestInstance, id: number) => {
//   const res = await api.delete<boolean>(`flows/${id}/Delete`);
//   return res.data;
// };
//
// export function useMutationDeleteFlowById(options?: UseMutationOptions<boolean, Error, { id: number }> | undefined) {
//   const api = useRestApi();
//
//   return useMutation<boolean, Error, { id: number }>({
//     mutationFn: ({ id }) => deleteFlowById(api, id),
//     ...options,
//   });
// }
