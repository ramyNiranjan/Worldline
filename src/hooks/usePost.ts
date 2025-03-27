import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../server/api';

export const usePost = (id: number) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPost(id),
    enabled: !!id, // Only run the query if an id is provided
  });
};
