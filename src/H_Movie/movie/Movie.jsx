import './movie.css';
import Movie_List from './Movie_List';

const Movie = () => {
  return (
    <div className="H_container">
        <div className="H_title">
          <h1>전체영화</h1>
        </div>
        <ul className="H_movieChart">
          <Movie_List />
        </ul>
        
    </div>

  )
}

export default Movie