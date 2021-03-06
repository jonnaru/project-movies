import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loading from "../components/Loading";
import "./popularList.css";

const PopularList = ({ sorting }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/${sorting}?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        setTimeout(() => {
          setLoading(false);
        }, 0);
      });
  }, [URL]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="movie-list-container">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <div className="movie-list-info">
                  <h2 className="movie-title">{movie.original_title}</h2>
                  <p className="movie-release-date">
                    Relesed {movie.release_date}
                  </p>
                </div>
                <div>
                  <img
                    src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PopularList;
