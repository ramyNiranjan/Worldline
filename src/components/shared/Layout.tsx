import { Outlet, useNavigate } from 'react-router-dom';
import PostForm from '../post/PostForm';
import { Button } from '../ui/button';

type Props = object;

function Layout({}: Props) {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto p-4">
      <div className="flex space-x-4 mb-4 justify-end">
        <Button onClick={() => navigate('/')} className="px-4 py-2 cursor-pointer">
          Posts
        </Button>
        <Button onClick={() => navigate('/users')} className="px-4 py-2 cursor-pointer">
          Users
        </Button>
        <PostForm title="+ Add Post" />
      </div>
      {/* Outlet will render the current page based on the route */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
