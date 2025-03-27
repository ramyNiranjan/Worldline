import { useComments } from '@/hooks/useComments';
import { usePost } from '@/hooks/usePost';
import { useParams } from 'react-router-dom';
import PostCommentCard from '../components/post/PostCommentCard';
import Headline from '../components/shared/Headline';

type Props = object;

function PostDetail({}: Props) {
  const { id } = useParams();
  const { data: post, isLoading: postLoading, isError: postError } = usePost(Number(id));
  const { data: comments, isLoading: commentsLoading, isError: commentsError } = useComments(Number(id));

  // need to handle loading and error states better
  if (postLoading || commentsLoading) return <div>Loading...</div>;
  if (postError || commentsError) return <div>Error loading data</div>;

  return (
    <div className="">
      <Headline title="Post Detail" />
      <PostCommentCard post={post?.data} comments={comments?.data} />
    </div>
  );
}
export default PostDetail;
