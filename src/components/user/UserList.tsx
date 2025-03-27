import { User } from '@/components-types';
import { useUsers } from '@/hooks/useUsers';
import UserCard from './UserCard';

type Props = object;

function UserList({}: Props) {
  const { data: users, isLoading, isError } = useUsers();

  // need to handle loading and error states better
  if (isLoading) return <div>Loading users...</div>;
  if (isError) return <div>Error fetching users</div>;

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
      {users?.data.map((user: User) => (
        <UserCard key={user.id} user={user} linkText={`${user.name}'s Posts`} link={`/users/${user.id}`} />
      ))}
    </div>
  );
}

export default UserList;
