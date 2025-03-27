import { Post } from '@/components-types';
import { useUserPosts } from '@/hooks/useUserPosts';
import { useParams } from 'react-router-dom';
import Headline from '../shared/Headline';
import PostCard from '../shared/PostCard';

type Props = object;

function UserPosts({}: Props) {
  const { id } = useParams<{ id: string }>();
  const { data: userPosts, isLoading, isError } = useUserPosts(Number(id));

  console.log(userPosts);

  // need to handle loading and error states better
  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <Headline title={`Posts by User ${id}`} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
        {userPosts?.data.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
export default UserPosts;
