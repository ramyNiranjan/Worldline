import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type PostCommentCardProps = {
  post?: {
    id: number;
    userId: number;
    title: string;
    body: string;
  };
  comments?: [
    {
      id: number;
      postId: number;
      email: string;
      name: string;
      body: string;
    }
  ];
};

function PostCommentCard({ post, comments }: PostCommentCardProps) {
  return (
    <Card className="flex flex-col h-full justify-between">
      <CardHeader>
        {post && (
          <>
            <CardTitle>{`${post.id}. ${post.title}`}</CardTitle>
            <CardDescription className="max-w-2/4">{post.body}</CardDescription>
          </>
        )}
      </CardHeader>
      {comments && (
        <>
          <h4 className="px-6 underline">Post comments</h4>
          {comments.map((comment) => (
            <CardContent className="w-2/3" key={comment.id}>
              <CardDescription className="text-gray-950">Name: {comment.name}</CardDescription>
              <CardDescription className="text-gray-900">Email: {comment.email}</CardDescription>
              <CardDescription className="">
                <strong>Comment:</strong> {comment.body}
              </CardDescription>
            </CardContent>
          ))}
        </>
      )}
    </Card>
  );
}
export default PostCommentCard;
