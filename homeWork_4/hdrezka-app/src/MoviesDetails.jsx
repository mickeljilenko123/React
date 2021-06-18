import React, { Component } from "react";

class MoviesDetails extends Component {
  state = {
    userAvatar: null,
    userName: null,
    userLocation: null,
  };

  componentDidMount() {
    this.getMovieData(this.props.match.params.movieId);
  }

  componentDidUpdate(prevProps) {
    const currentMovieId = this.props.match.params.movieId;
    if (prevProps.match.params.movieId !== currentMovieId) {
      this.getMovieData(this.props.match.params.movieId);
    }
  }
  
  getMovieData = (movieId) => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=8b38378883e18ebde31fdcfea28b3781`)
      .then((res) => res.json())
      .then((MovieList) => {
            const { poster_path, original_title, overview } = MovieList;
      this.setState({
        userAvatar: poster_path,
        userName: original_title,
        userLocation: overview,
      })
      })
  }
  
      
   

  render() {
    const { userAvatar, userName, userLocation } = this.state;

    if (!userAvatar || !userName || !userLocation) {
      return null;
    }
    return (
      <div className="product">
        <img 
          src={`https://image.tmdb.org/t/p/w342/${userAvatar}`} 
          alt="Movie Avatar" />
        <div>
          <span>{userName}</span>
          <span>{userLocation}</span>
        </div>
      </div>
    );
  }
}

export default MoviesDetails;
