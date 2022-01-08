// import propTypes from 'prop-types';
import './App.css';
import { Container } from './components/container/container.styled';
import { Profile } from './components/profile/profile';
import user from './json/user.json';
import { Statistics } from './components/stats/stats';
import statistics from './json/stats.json';
import { FriendList } from './components/friends/friends';
import friends from './json/friends.json';
import { TransactionHistory } from './components/transactions/transactions';
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