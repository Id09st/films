import React from "react";
import films from "../List/ListOfFilms";

export default function FilmsPresentation() {
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
