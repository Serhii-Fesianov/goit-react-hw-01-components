import { WrapperCard } from './profile/Profile';
import user from './data/user.json';
import data from './data/data.json';
import { CardStatistics } from './statistics/Statistics';

export const App = () => {
  return (
    <>
      <WrapperCard user={user} /> <CardStatistics data={data} />
    </>
  );
};
