import React, { Component } from 'react'
import films from '../../List/ListOfFilms';
import FilmsContainer from '../FilmsContainer';

export class Main extends Component {
    constructor() {
        super();
        this.state = {
            films: films
        };
    }
    render() {
  return <FilmsContainer films={this.state.films}/>
    }
}
