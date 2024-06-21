import { Component } from 'react';
import './App.css';

import Pokemon from './Pokemon';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      pokemonUrl: null,
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => this.setState({pokemonList: data.results}));
  }

  render() {
    const { pokemonList, pokemonUrl } = this.state;
    return (
      <div style={{display: 'flex'}}>
        <ul className="App">
          {pokemonList.map((pokemon) => <li key={pokemon.name} onClick={() => {
            this.setState({
              pokemonUrl: pokemon.url,
            });
          }}>{pokemon.name}</li>)}
        </ul>
        <Pokemon pokemonUrl={pokemonUrl} />
      </div>
    );
  }
}

export default App;
