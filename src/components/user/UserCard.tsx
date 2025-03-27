import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

type UserCardProps = {
  user?: {
    id: number;
    name: string;
    username: string;
    website: string;
    email: string;
    phone: string;
  };
  onDelete?: () => void;
  linkText?: string;
  link?: string;
  useAsPostForm?: boolean;
};

function UserCard({ user, link, linkText }: UserCardProps) {
  return (
    <Card className="flex flex-col h-full justify-between">
      <CardHeader>{user && <CardTitle>{`${user.id}. ${user.name}`}</CardTitle>}</CardHeader>
      <CardContent>
        {user && (
          <>
            <CardDescription>
              <strong>Email:</strong> {user.email}
            </CardDescription>
            <CardDescription>
              <strong>Website:</strong> {user.website}
            </CardDescription>
            <CardDescription>
              <strong>Phone:</strong> {user.website} {user.phone}
            </CardDescription>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link to={link || '#'} className="text-[14px] text-gray-700 underline underline-offset-1 hover:text-gray-500 hover:no-underline">
          {linkText}
        </Link>
      </CardFooter>
    </Card>
  );
}
export default UserCard;
