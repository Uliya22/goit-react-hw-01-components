import { Profile } from "./profile/Profile";
import user from "./user.json";

import { Statistics } from './statistics/Statistics';
import data from './data.json';

import { FriendList } from "./friendList/FriendList";
import friends from './friends.json';

import {TransactionHistory} from "./transactionHistory/TransactionHistory";
import items from './transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
