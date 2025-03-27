import { useQuery } from '@tanstack/react-query';
import { fetchUserPosts } from '../server/api';

export const useUserPosts = (userId: number) => {
  return useQuery({
    queryKey: ['userPosts', userId],
    queryFn: () => fetchUserPosts(userId),
    enabled: !!userId, // Only fetch posts if userId is provided
  });
};
