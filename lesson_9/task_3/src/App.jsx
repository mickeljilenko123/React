import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
    createUser = (obj) => {
        console.log(obj)
      }
   render() {
       return(
           <UserForm user={this.createUser}/>
       )
   }
}
export default App;