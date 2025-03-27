import { updatePost } from '@/server/api';
import { useMutation } from '@tanstack/react-query';

export const useUpdatePost = () => {

  return useMutation({
    mutationFn: (post: { id: number; title: string; body: string; userId: number }) => {
      const { id, ...data } = post;
      return updatePost(id, data);
    },
  });
};
