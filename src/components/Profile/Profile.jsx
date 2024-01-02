import { Card, CardTittle } from './Profile.styled';

export const WrapperCard = ({ user }) => {
  console.log(user);
  return (
    <Card>
      <img src={user.avatar} alt={user.username} />
      <CardTittle>{user.username}</CardTittle>
      <p>{user.tag}</p>
      <p>{user.location}</p>
      <p>{user.stats.followers}</p>
      <p>{user.stats.views}</p>
      <p>{user.stats.likes}</p>
    </Card>
  );
};
