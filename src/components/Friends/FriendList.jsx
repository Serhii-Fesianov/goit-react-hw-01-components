import {
  FriendCard,
  FriendList,
  SpanOnline,
  Name,
  SpanOffline,
} from './FriendList.styled';

export const FriendListUser = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(e => (
        <FriendCard key={e.id}>
          {e.isOnline ? <SpanOnline></SpanOnline> : <SpanOffline></SpanOffline>}
          <img src={e.avatar} alt={e.name} width={40} height={40} />
          <Name>{e.name}</Name>
        </FriendCard>
      ))}
    </FriendList>
  );
};
