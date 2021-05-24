import React, { Component } from "react";
import Loader from 'react-loader-spinner';

class SearchBar extends Component{
    state = {
        images: [],
        name: '',
        apiUrl: 'https://pixabay.com/api',
        apiKey: '21756166-f94825c7e8322ac63fb23a466',
        page: 1,
        per_page: 12,
        isLoading: false,

    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({ name: value });
         
    };

    handleSubmit = (event) => {
        this.setState({ images: [] });
        event.preventDefault();
        this.onCreate(this.state)
    };

    onCreate = ( { name } ) => {
            fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${name}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`)
            .then(res => {
                if(res.ok) {
                  return res.json();
                }
            }).then(yarema => 
                { 
                    this.setState({ images: yarema.hits })
                })
                .finally(() => this.setState({ isLoading: true }))
            }
    
        

        handleButton = () => {
            this.setState({ 
                page: this.state.page + 1
             });
            fetch(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.name}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`)
            .then(res => res.json())
            .then(images => {
               this.setState(prevState => 
                ({ images: prevState.images.concat(images.hits) }));
             })
             .finally(() => this.setState({ isLoading: true }))
             
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
          <ul className="ImageGallery">
          {this.state.isLoading && (
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          )}
              {this.state.images.map(image => (
                  <li key={image.id} className="ImageGalleryItem">
                       <img src={image.webformatURL} alt="" className="ImageGalleryItem-image" />
                  </li>
              ))}
          </ul>
          {this.state.images.length > 0 ? <button className="Button" onClick={this.handleButton}>Button</button> : null}
        </div>
      );
  }  
  
}

export default SearchBar;
