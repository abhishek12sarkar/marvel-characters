import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      marvelCharacters: [],
      searchCharecter: "",
    };
  }

  componentDidMount() {
    fetch("https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          marvelCharacters: users.filter(
            (charecter) => charecter.biography.publisher === "Marvel Comics"
          ),
        })
      );
  }

  handleChange = (searchText) => {
    this.setState({ searchCharecter: searchText.target.value });
  };

  render() {
    const { marvelCharacters, searchCharecter } = this.state;
    const filteredCharacters = marvelCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchCharecter.toLowerCase())
    );

    return (
      <div className="App">
        <h4>© Abhishek Sarkar</h4>
        <h1>Marvel Characters</h1>
        <SearchBox
          placeholder="Search Charecters"
          handleChange={this.handleChange}
        />
        <CardList marvelCharacters={filteredCharacters}></CardList>
      </div>
    );
  }
}

export default App;
