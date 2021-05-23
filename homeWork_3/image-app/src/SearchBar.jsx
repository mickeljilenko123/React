import React, { Component } from "react";

 

class SearchBar extends Component{
    state = {
        images: [],
        name: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '21756166-f94825c7e8322ac63fb23a466',
        page: 1,

    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ name: value });
         
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.onCreate(this.state)
    }
    onCreate = ( { name } ) => {
        fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${name}&page=${this.state.page}`)
        .then(res => {
            if(res.ok) {
              return res.json();
            }
        }).then(imageList => {
                this.setState({ images: imageList })
            })
        }
        
    

  render() {
    console.log(this.state.images);
    return (
        <div>
          <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>
    
              <input
                className="SearchForm-input"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                // autocomplete="off"
                // autofocus
                placeholder="Search images and photos"
              />
            </form>
          </header>
        </div>
      );
  }  
  
}

export default SearchBar;
