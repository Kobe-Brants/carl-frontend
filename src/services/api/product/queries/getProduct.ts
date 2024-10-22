// import { flowKeys } from '@/api/rest/flow/keys';
// import { Flow } from '@/api/rest/flow/types';
// import { useRestApi } from '@/context/api/ApiRestContext';
// import { ApiRestInstance } from '@/context/api/types';
// import { QueryOpt } from '@/helpers/api';
// import { useQuery } from '@tanstack/react-query';
//
// const getProduct = async (api: ApiRestInstance, flowId: number): Promise<Flow | undefined> => {
//   try {
//     const result = await api.get<Flow>(`flows/${flowId}`);
//     return result.data;
//   } catch (error) {
//     return undefined;
//   }
// };
//
// export const useQueryFlow = (flowId: number, options?: QueryOpt<Flow | undefined>) => {
//   const api = useRestApi();
//
//   return useQuery({
//     queryKey: flowKeys.flow(flowId),
//     queryFn: () => getProduct(api, flowId),
//     ...options,
//   });
// };
