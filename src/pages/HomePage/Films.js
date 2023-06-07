import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Films({ films }) {
  const [film, setFilms] = useState([]);
  return (
    <div className="container">
      <div className="row">
        {films.map((film) => (
          <div className="col-sm-4" key={film.id}>
            <div className="sheader d-flex">
              <div className="poster">
                <img itemprop="image" src={film.image} alt={film.title} />
              </div>
              <div className="data sm-9">
                <h4>{film.title}</h4>
                <div className="extra">
                  <span className="date" itemprop="dateCreated">
                    {film.year}
                  </span>
                </div>
                <div className="extra">
                  <span className="country">{film.nation}</span>
                </div>
                <Link to={`detail/${film.id}`}>
                  <button>Detail.js</button>
                </Link>
                <button
                  onClick={() => {
                    setFilms(film);
                  }}
                >
                  <a href="#popup1" id="openPopUp">
                    Detail
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
        <div id="popup1" className="overlay">
          <div className="popup">
            <img src={film.image} />
            <h2>{film.title}</h2>
            <a className="close" href="#">
              &times;
            </a>
            <div className="content">{film.info}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
