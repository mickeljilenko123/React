import React from 'react';
import user from './user.json';
import Profile from './Profile';



const App = () => {
    return(
        <Profile user={user}/>
    )
}
export default App;