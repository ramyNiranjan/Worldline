import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../server/api';

export const useComments = (postId: number) => {
  return useQuery({
    queryKey: ['comments', postId],
    queryFn: () => fetchComments(postId),
    enabled: !!postId, // Only fetch comments when a valid post ID exists
  });
};
