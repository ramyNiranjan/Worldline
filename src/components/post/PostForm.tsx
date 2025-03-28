import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCreatePost } from '@/hooks/useCreatePost';
import { useUpdatePost } from '@/hooks/useUpdatePost';
import { useState } from 'react';
import { toast } from 'sonner';
import { InputField } from './InputField';

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

  // Error states for validation
  const [userIdError, setUserIdError] = useState('');
  const [nameError, setNameError] = useState('');
  const [usernameError, setUsernameError] = useState('');

  // Hooks for create and update operations
  const { mutate: createPost } = useCreatePost();
  const { mutate: updatePost } = useUpdatePost();

  const validate = () => {
    let isValid = true;

    if (!userId || isNaN(Number(userId))) {
      setUserIdError('User ID is required & must be a number.');
      isValid = false;
    } else {
      setUserIdError('');
    }

    if (!name) {
      setNameError('Title is required.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!username) {
      setUsernameError('Content is required.');
      isValid = false;
    } else {
      setUsernameError('');
    }

    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) {
      return;
    }
    const payload = { title: name, body: username, userId: Number(userId) };

    if (postId) {
      updatePost(
        { ...payload, id: postId },
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
      createPost(payload, {
        onSuccess: (data) => {
          toast.success(`Post created: ${JSON.stringify(data?.data)}`);
          setDialogOpen(false);
        },
        onError: (error) => {
          toast.error(`Error creating post: ${JSON.stringify(error)}`);
        },
      });
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
            <InputField id="userId" label="User Id" value={userId} error={userIdError} placeholder="Enter user id" onChange={(e) => setUserId(e.target.value)} />
            <InputField id="name" label="Title" value={name} error={nameError} placeholder="Enter post title" onChange={(e) => setName(e.target.value)} />
            <InputField id="username" label="Content" value={username} error={usernameError} placeholder="Enter post content" onChange={(e) => setUsername(e.target.value)} />
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
