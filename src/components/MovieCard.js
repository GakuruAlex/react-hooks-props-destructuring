import React from "react";

function MovieCard({
  title,
  posterSrc = "https://images.freeimages.com/images/large-previews/70b/bike-red-1423575.jpg",
  genres,
}) {
  return (
    <div className="movie-card">
      <img src={posterSrc} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
