import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import PostForm from '../post/PostForm';

type PostCardProps = {
  post?: {
    id: number;
    title: string;
    body: string;
  };
  onDelete?: () => void;
  linkText?: string;
  link?: string;
  useAsPostForm?: boolean;
};

function PostCard({ post, onDelete, link, linkText, useAsPostForm }: PostCardProps) {
  return (
    <Card className="flex flex-col h-full justify-between">
      <CardHeader>{post && <CardTitle>{`${post.id}. ${post.title}`}</CardTitle>}</CardHeader>
      <CardContent>{post && <CardDescription>{post.body}</CardDescription>}</CardContent>
      <CardFooter className="flex justify-between">
        {useAsPostForm ? (
          <>
            <Button className="bg-red-100 cursor-pointer" variant="outline" onClick={onDelete}>
              Delete
            </Button>
            <PostForm title="Edit Post" postId={post?.id} defaultValues={post ? { name: post.title, username: post.body, userId: post.id } : undefined} />
          </>
        ) : null}
        <Link to={link || '#'} className="text-[14px] text-gray-700 underline underline-offset-1 hover:text-gray-500 hover:no-underline">
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
export default PostCard;
