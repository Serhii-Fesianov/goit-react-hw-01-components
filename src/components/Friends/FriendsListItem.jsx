import { FriendCard, Name, Span } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendCard>
      <Span $isonline={isOnline}></Span>
      <img src={avatar} alt={name} width={40} height={40} />
      <Name>{name}</Name>
    </FriendCard>
  );
};
