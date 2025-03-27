import { Post } from '@/components-types';
import { useDeletePost } from '@/hooks/useDeletePost';
import { usePosts } from '@/hooks/usePosts';
import { useState } from 'react';
import { toast } from 'sonner';
import PaginationComponent from '../shared/PaginationComponent';
import PostCard from '../shared/PostCard';

type Props = object;

function PostLists({}: Props) {
  const { mutate: deletePost } = useDeletePost();
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePosts(page);

  // need to handle loading and error states better
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  const totalPosts = data?.headers['x-total-count'] || 100;
  const totalPages = Math.ceil(totalPosts / data?.data.length);

  const handleDelete = (id: number) => {
    deletePost(id, {
      onSuccess: () => {
        toast.success(`Post deleted`);
      },
      onError: () => {
        toast.error(`Error deleting post`);
      },
    });
  };

  return (
    <div className="">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mb-6">
        {data?.data.map((post: Post) => (
          <div key={post.id}>
            <PostCard post={post} linkText="See Comments" link={`/post/${post.id}`} onDelete={() => handleDelete(post.id)} useAsPostForm />
          </div>
        ))}
      </div>
      <PaginationComponent currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}

export default PostLists;
