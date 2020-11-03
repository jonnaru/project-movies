import React, { useEffect, useState } from "react";

const PopularList = () => {
  const [movies, setMovies] = useState([]);

  const API_KEY = "f7e0c4070f4665dbae6d58fba626cfe4";
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  // const POSTER = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY} `;

  console.log("api", URL);
  // console.log("poster", POSTER);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
        console.log("Movies", json.results);
      });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.original_title}</h2>
        </div>
      ))}
    </div>
  );
};

export default PopularList;