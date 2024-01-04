import { WrapperCard } from './profile/Profile';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { CardStatistics } from './statistics/Statistics';
import { FriendListUser } from './friends/FriendList';
import { TransactionsUser } from './transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <WrapperCard user={user} /> <CardStatistics data={data} />
      <FriendListUser friends={friends} />
      <TransactionsUser transactions={transactions} />
    </>
  );
};
