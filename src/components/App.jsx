import { WrapperCard } from './Profile/Profile';
import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';
import { CardStatistics } from './Statistics/Statistics';
import { FriendListUser } from './Friends/FriendList';
import { TransactionsUser } from './Transactions/TransactionHistory';

export const App = () => {
  return (
    <>
      <WrapperCard user={user} /> <CardStatistics data={data} />
      <FriendListUser friends={friends} />
      <TransactionsUser transactions={transactions} />
    </>
  );
};
