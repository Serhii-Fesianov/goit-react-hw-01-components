import { WrapperCard } from './ProfileUSER/Profile';
import user from './dataJSON/user.json';
import data from './dataJSON/data.json';
import friends from './dataJSON/friends.json';
import transactions from './dataJSON/transactions.json';
import { CardStatistics } from './StatisticsLIST/Statistics';
import { FriendListUser } from './FriendsLIST/FriendList';
import { TransactionsUser } from './TransactionTABLE/TransactionHistory';

export const App = () => {
  return (
    <>
      <WrapperCard user={user} /> <CardStatistics data={data} />
      <FriendListUser friends={friends} />
      <TransactionsUser transactions={transactions} />
    </>
  );
};
