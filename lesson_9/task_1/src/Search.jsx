import React from 'react';

class Search extends React.Component {

    state = {
        value: '',
    };

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    };
    search = e => {
        e.preventDefault();
        alert(this.state.value);
    };
   render() {
       return(
        <form className="search" onChange={this.search}>
        <input type="text"  onChange={this.handleChange} value={this.state.value} className="search__input" />
        <button className="search__button" type='submit'>Search</button>
      </form>
       )
   }
}
export default Search;