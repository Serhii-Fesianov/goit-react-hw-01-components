import { WrapperCard } from './Profile/Profile';
import user from './Data/user.json';
import data from './Data/data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';
import { CardStatistics } from './StatisticsList/Statistics';
import { FriendListUser } from './FriendsList/FriendList';
import { TransactionsUser } from './TransactionTable/TransactionHistory';

export const App = () => {
  return (
    <>
      <WrapperCard user={user} /> <CardStatistics data={data} />
      <FriendListUser friends={friends} />
      <TransactionsUser transactions={transactions} />
    </>
  );
};
