// import propTypes from 'prop-types';
import './App.css';
import { Container } from './components/Container/Container.styled';
import { Profile } from './components/Profile/Profile';
import user from './json/user.json';
import { Statistics } from './components/Stats/Stats';
import statistics from './json/stats.json';
import { FriendList } from './components/Friends/Friends';
import friends from './json/friends.json';
import { TransactionHistory } from './components/Transactions/Transactions';
import transactions from './json/transactions.json';


export default function App() {
  return (
    <Container>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statistics} />
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </Container>  
);
}