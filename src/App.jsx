import { useState, useEffect } from 'react'
import './App.css'
import Search from './Search'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [activeGenre, setActiveGenre] = useState("All")

  useEffect(() => {
    fetch('/films.json')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies)
      })
  }, [])

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase())

    const genreMatch =
      activeGenre === 'All' ||
      movie.genre.includes(activeGenre)

    return titleMatch && genreMatch
  })

  const genres = ['All', 'Crime', 'Drama', 'Thriller']

  return (
    <div className="wrapper">

      <Search
        search={search}
        setSearch={setSearch}
      />

      <main>

        <div className="filter">
          {
            genres.map(genre => (
              <h4
                key={genre}
                className={genre === activeGenre ? 'active' : ''}
                onClick={() => setActiveGenre(genre)}
              >
                {genre}
              </h4>
            ))
          }
        </div>

        <div className="movies">
          {
            filteredMovies.map(movie => (
              <div
                className="movie"
                key={movie.id}
              >
                <img
                  src={movie.image}
                  alt={movie.title}
                />

                <h2>
                  {movie.title} ({movie.year})
                </h2>

                <p>{movie.genre}</p>
              </div>
            ))
          }
        </div>

      </main>

      <footer className="footer">
        <p>Hello guys</p>
      </footer>

    </div>
  )
}

export default App