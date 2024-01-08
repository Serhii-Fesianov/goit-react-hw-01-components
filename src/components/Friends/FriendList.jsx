import { FriendList } from './FriendList.styled';
import { FriendListItem } from './FriendsListItem';

export const FriendListUser = ({ friends }) => {
  return (
    <FriendList>
      {friends.map(element => (
        <FriendListItem key={element.id} {...element} />
      ))}
    </FriendList>
  );
};
