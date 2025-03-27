import Headline from '@/components/shared/Headline';
import UserList from '@/components/user/UserList';

type UsersProps = object;

function Users({}: UsersProps) {
  return (
    <div className="container mx-auto">
      <Headline title="Users" />
      <UserList />
    </div>
  );
}

export default Users;
