import {
  Card,
  CardTittle,
  BasicInformation,
  ListSocial,
  ElementList,
} from './Profile.styled';

export const WrapperCard = ({ user }) => {
  return (
    <Card>
      <img src={user.avatar} alt={user.username} />
      <CardTittle>{user.username}</CardTittle>
      <BasicInformation>@{user.tag}</BasicInformation>
      <BasicInformation>{user.location}</BasicInformation>

      <ListSocial>
        <ElementList>
          followers:
          {user.stats.followers}
        </ElementList>

        <ElementList>
          views:
          {user.stats.views}
        </ElementList>

        <ElementList>
          likes:
          {user.stats.likes}
        </ElementList>
      </ListSocial>
    </Card>
  );
};
