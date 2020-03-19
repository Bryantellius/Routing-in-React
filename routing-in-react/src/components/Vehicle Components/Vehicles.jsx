import React, { Component } from "react";
import VehiclesCards from "./VehiclesCards";

class Vehicles extends Component {
  state = {
    vehiclesArr: []
  };
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/Vehicles")
      .then(response => response.json())
      .then(data => {
        this.setState({
          vehiclesArr: data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="my-3">Studio Ghibli Vehicles</h1>
        <VehiclesCards arr={this.state.vehiclesArr} />
      </React.Fragment>
    );
  }
}

export default Vehicles;
