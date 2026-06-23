import './MovieInfo.css'
import { useEffect, useState } from 'react'

function MovieInfo(){

    const [movie, setMovies] = useState('')

     useEffect(() => {
        fetch('/films.json')
        .then(response => response.json())
        .then(data => {
            setMovies(data.movies[0])
        })
    }, [])

    return(
        <div className="movieInfo">
            <div>
                <img src={movie.image} alt={movie.title} />
                <a href=""><i className="fa-solid fa-clapperboard"></i> Trailer</a>
                <div className="btns">
                    <div className="fav">
                        <a href=""><i className="fa-solid fa-star"></i></a>
                        <h4>Favorite</h4>
                    </div>
                    <div className="later">
                        <a href=""><i className="fa-solid fa-bookmark"></i></a>
                        <h4>Watch Later</h4>
                    </div>
                    <div className="watched">
                        <a href=""><i className="fa-solid fa-eye"></i></a>
                        <h4>Watched</h4>
                    </div>
                </div>
            </div>
            <article>
                <h1>{movie.title}</h1>
                <a href=""><i className="fa-solid fa-play"></i> Watch</a>
                <div className="desc">
                    <h2>DESCRIPTION</h2>
                    <p>{movie.description}</p>
                </div>
                <div className="inf">
                    <div>
                        <h3>Rating</h3>
                        <h4>8.9</h4>
                    </div>
                    <div>
                        <h3>Release year</h3>
                        <h4>{movie.year}</h4>
                    </div>
                    <div>
                        <h3>Genres</h3>
                        <h4>{movie.genre}</h4>
                    </div>
                    <div>
                        <h3>Actors</h3>
                        {/* {movie.actors.map((actor, index)=>(
                            <h4 key={index}>{actor}</h4>
                        ))} */}
                    </div>
                    <div>
                        <h3>Duration</h3>
                        <h4>2 hours +</h4>
                    </div>
                </div>
            </article>
            <aside></aside>
        </div>
    )
}

export default MovieInfo

