import React from 'react';
import FriendList from './FriendList';
import friends from './friends.json'

const App = () => {
   return(
       <>
       <div>Hello</div>
       <FriendList friends = {friends} />
       </>
   )
}
export default App;