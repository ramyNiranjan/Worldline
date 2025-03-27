import PostLists from '@/components/post/PostLists';
import Headline from '@/components/shared/Headline';

type PostsProps = object;

function Posts({}: PostsProps) {
  return (
    <div className="">
      <Headline title="Posts" />
      <PostLists />
    </div>
  );
}
export default Posts;
