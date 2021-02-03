import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
    state = {
            currentPage: 0,
            usersPerPage: 3
        }
    
    
    goPrev = () => {
        this.setState({
            currentPage: this.state.currentPage - 1,
        });
   };
   goNext = () => {
       this.setState({
           currentPage: this.state.currentPage + 1,
       });
  };

    render() {
        const start = this.state.currentPage * this.state.usersPerPage;
        const end = start + this.state.usersPerPage;
    //через slice режем начальный массив поль-лей
    const usersToDisplay = this.props.users.slice(start, end);
        return (
            <div>
                <Pagination 
                goPrev={this.goPrev}
                goNext={this.goNext}
                currentPage={this.state.currentPage}
                todoItems={this.props.users.length}
                itemsPerPage={this.state.usersPerPage}
                />
  <ul class="users">
      {usersToDisplay.map(user => {
         <User key={user.id} name={user.name} age={user.age}/> 
      })}
  </ul>
</div>
        );
    }
}

export default UsersList;

//Algo
// Отобразить переданные елем в массиве
// Показывать по 3 елем.
// Создать пагинацию