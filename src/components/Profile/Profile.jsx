import {
  Card,
  CardTittle,
  LabelSocial,
  TextSocial,
  BasicInformation,
} from './Profile.styled';

export const WrapperCard = ({ user }) => {
  console.log(user);
  return (
    <Card>
      <img src={user.avatar} alt={user.username} />
      <CardTittle>{user.username}</CardTittle>
      <BasicInformation>@{user.tag}</BasicInformation>
      <BasicInformation>{user.location}</BasicInformation>
      <LabelSocial>
        <TextSocial>
          followers:
          {user.stats.followers}
        </TextSocial>
        <TextSocial>
          views:
          {user.stats.views}
        </TextSocial>
        <TextSocial>
          likes:
          {user.stats.likes}
        </TextSocial>
      </LabelSocial>
    </Card>
  );
};
