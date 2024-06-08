import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constant/query-key';

import { getPeople } from '..';

// export const usePostProfile = () => {
//   return useMutation({
//     mutationKey: [POST_PROFILE],
//     mutationFn: (body: ProfileUpdateType) => postProfile(body),
//   });
// };

export const useGetProfile = (id: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_SAMPLE_KEY],
    queryFn: () => getPeople(id),
  });
};
