import React from "react";

const MovieComponent = (props) => {
  const { title, open, poster } = props;

  return (
    <div>
      <h1>제목: {title}</h1>
      <h1>개봉: {open}</h1>
      <img src={poster} alt="" />
      <hr />
    </div>
  );
};

export default MovieComponent;
