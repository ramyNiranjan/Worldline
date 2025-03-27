//

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import { useCreatePost } from '@/hooks/useCreatePost';
import { useUpdatePost } from '@/hooks/useUpdatePost';
import { useState } from 'react';
import { toast } from 'sonner';

type Props = {
  title: string;
  postId?: number;
  defaultValues?: { name: string; username: string; userId: number };
};

function PostForm({ title, postId, defaultValues }: Props) {
  const [userId, setUserId] = useState(defaultValues?.userId || '');
  const [name, setName] = useState(defaultValues?.name || '');
  const [username, setUsername] = useState(defaultValues?.username || '');
  const [dialogOpen, setDialogOpen] = useState(false);

  // Hooks for create and update operations
  const { mutate: createPost } = useCreatePost();
  const { mutate: updatePost } = useUpdatePost();

  const handleSubmit = () => {
    if (postId) {
      updatePost(
        { id: postId, title: name, body: username, userId: Number(userId) },
        {
          onSuccess: (data) => {
            toast.success(`Post updated successfully!: ${JSON.stringify(data?.data)}`);
            setDialogOpen(false);
          },
          onError: (error) => {
            toast.error(`Error updating post: ${JSON.stringify(error)}`);
          },
        }
      );
    } else {
      createPost(
        { title: name, body: username, userId: Number(userId) },
        {
          onSuccess: (data) => {
            toast.success(`Post created: ${JSON.stringify(data?.data)}`);
            setDialogOpen(false);
          },
          onError: (error) => {
            toast.error(`Error creating post ${JSON.stringify(error)}`);
          },
        }
      );
    }
  };

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger className="cursor-pointer" asChild>
          <Button variant="outline" onClick={() => setDialogOpen(true)}>
            {title}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{postId ? 'Edit Post' : 'Create Post'}</DialogTitle>
            <DialogDescription>{postId ? 'Make changes to your post here. Click save when you’re done.' : 'Fill in the details to create a new post.'}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="userId" className="text-right">
                User Id
              </Label>
              <Input id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter user id" className="col-span-3" />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Title
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter post title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Content
              </Label>
              <Input id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter post content" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} type="button">
              {postId ? 'Save changes' : 'Create Post'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PostForm;
