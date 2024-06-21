import React, { Component } from 'react';

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonData: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { pokemonUrl } = this.props;

    if (pokemonUrl != null && pokemonUrl !== prevProps.pokemonUrl) {
      fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => this.setState({pokemonData: data}));
    }
  }

  render() {
    const { pokemonData } = this.state;
    return pokemonData ? (
        <article style={{flex: '1'}}>
          <h1>{pokemonData.name}</h1>
          <p>height: {pokemonData.height}</p>
          <p>weight: {pokemonData.weight}</p>
        </article>
      ) : null;
  }
}

export default Pokemon;
