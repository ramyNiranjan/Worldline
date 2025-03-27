import { deletePost } from '@/server/api';
import { useMutation } from '@tanstack/react-query';

export const useDeletePost = () => {
  return useMutation({
      mutationFn: (id:number) => deletePost(id),
    });
};
