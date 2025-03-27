import { createPost } from '@/server/api';
import { useMutation } from '@tanstack/react-query';

export const useCreatePost = () =>useMutation({
    mutationFn:createPost
  });
