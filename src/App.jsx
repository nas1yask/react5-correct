import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Search from './Search'


function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [activeGenre, setActiveGenre] = useState("All")

  useEffect(()=>{
    fetch('/films.json')
      .then(response => response.json())
      .then(data => {
        setMovies(data.movies)
      })
  }, [])

  const filtredMovies = movies.filter(movie=>
      movie.title.toLowerCase().includes(search.toLowerCase())
    
  ) 
  
  const genres = ['All', 'Crime', 'Drama', 'Thriller'] 

  return (
    <>
      <Search search={search} setSearch={setSearch}/>
      <main>
          <div className="filter"> 
              {
                genres.map(genre =>
                  <h4 key={genre}
                      className={genre === activeGenre ? 'active' : ''}
                      onClick={()=> {
                        setActiveGenre(genre)
                        
                        }}>
                        {genre}
                        </h4>
                )
              }
          </div>
        <div className="movies">
          {
            filtredMovies.map((movie, i) =>(
              <div className="movie" key={i}>
                <img src={movie.image} alt={movie.image} />
                <h2>{movie.title} ({movie.year})</h2>
              </div>
            )) 
          }
        </div>
      </main>
    </>
  )
}

export default App
 