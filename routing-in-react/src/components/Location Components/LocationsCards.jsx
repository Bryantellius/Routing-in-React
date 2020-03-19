import React from "react";

function LocationsCards(props) {
  const listGroup = props.arr.map(location => {
    return (
      <div key={location.id} className="col-md-6 p-2">
        <h4>{location.name}</h4>
        <p>
          Climate: {location.climate}
          <br></br>
          Terrain: {location.terrain}
          <br></br>
          Surface Water: {location.surface_water}
        </p>
      </div>
    );
  });

  return <div className="row m-2 border rounded shadow">{listGroup}</div>;
}

export default LocationsCards;
