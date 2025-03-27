import Headline from '@/components/shared/Headline';
import UserLists from '@/components/user/UserLists';

type UsersProps = object;

function Users({}: UsersProps) {
  return (
    <div className="">
      <Headline title="Users" />
      <UserLists />
    </div>
  );
}

export default Users;
