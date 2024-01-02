import { WrapperCard } from './profile/Profile';
import user from './data/user.json';

export const App = () => {
  return <WrapperCard user={user} />;
};
