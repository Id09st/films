import React, { Component } from "react";
import films from "../../List/ListOfFilms";
import Films from "./Films";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      films: films,
    };
  }
  render() {
    return <Films films={this.state.films} />;
  }
}
