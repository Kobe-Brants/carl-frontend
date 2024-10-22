//
// import { useQuery } from '@tanstack/react-query';
// import { PagedResult } from '../../../../types/api/types.ts';
//
// const getProducts = async (api: ApiRestInstance, flowId: number, pageNumber: number = 1, pageSize: number = 10) => {
//   try {
//     const result = await api.get<PagedResult<FlowNodeExecutionLog[][]> | undefined>(`products/${flowId}/logs`, {
//       params: { pageNumber, pageSize },
//     });
//     return result.data;
//   } catch (error) {
//     return undefined;
//   }
// };
//
// export const useQueryFlowLogs = (
//   flowId: number,
//   pageNumber: number = 1,
//   pageSize: number = 10,
//   options?: QueryOpt<PagedResult<FlowNodeExecutionLog[][]> | undefined>,
// ) => {
//   const api = useRestApi();
//
//   return useQuery({
//     queryKey: [flowKeys.flowLogs(flowId, pageNumber, pageSize)],
//     queryFn: () => getProducts(api, flowId, pageNumber, pageSize),
//     ...options,
//   });
// };
