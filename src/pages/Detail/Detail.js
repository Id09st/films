import React from "react";
import { useParams } from "react-router-dom";
import films from "../../List/ListOfFilms";

export default function Detail() {
  const userName = useParams();
  const film = films.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <div className="container">
      <div className="product-card">
        <div className="badge">{film.title}</div>
        <div className="product-tumb">
          <img src={`../${film.image}`} alt="" />
        </div>
        <div className="product-details">
          <h4>{film.year}</h4>
          <p>{film.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
}
