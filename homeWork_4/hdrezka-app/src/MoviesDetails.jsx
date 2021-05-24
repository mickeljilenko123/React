import React from 'react';


function MoviesDetails( { match } ) {
    
    return (
        <div className="product">
            { `Movie is a ${match.params.moviesId}` }
        </div>
    )
}

export default MoviesDetails;
