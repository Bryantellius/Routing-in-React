import React, { Component } from "react";
import LocationsCards from "./LocationsCards";

class Locations extends Component {
  state = {
    locationsArr: []
  };
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/locations")
      .then(response => response.json())
      .then(data => {
        this.setState({
          locationsArr: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="my-3">Studio Ghibli Locations</h1>
        <LocationsCards arr={this.state.locationsArr} />
      </React.Fragment>
    );
  }
}

export default Locations;
