import React, { Component } from "react";
import SpeciesCards from "./SpeciesCards";

class Species extends Component {
  state = {
    speciesArr: []
  };
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/species")
      .then(response => response.json())
      .then(data => {
        this.setState({
          speciesArr: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="my-3">Studio Ghibli Species</h1>
        <SpeciesCards arr={this.state.speciesArr} />
      </React.Fragment>
    );
  }
}

export default Species;
