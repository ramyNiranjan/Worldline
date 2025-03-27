import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../server/api';

export const usePosts = (page: number) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: () => fetchPosts(page),
  });
};
