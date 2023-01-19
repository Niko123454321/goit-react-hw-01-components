
import { Profile } from "../Profile/profile";
import { Statistics } from "../Statistics/statistics";
import { FriendList } from "../FriendList/friendList";
import { TransactionHistory } from "../TransactionHistory/transactionHistory";
import { data, friends, transactions, user } from "../../data/index";

const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (

     <div
      style={{
        height: '120%',

        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />

      <Statistics title="Upload stats" stats={data} />
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
        
    
    
  );
};
