import React from 'react';

function VehiclesCards(props) {
    const listGroup = props.arr.map((vehicle) => {
        return (
            <div key={vehicle.id} className='col-md-12 p-2'>
                <h4>{vehicle.name}</h4>
                <h4>{vehicle.vehicle_class}</h4>
                <p>{vehicle.description}</p>
                <h6>Length: {vehicle.length}</h6>
                <hr></hr>
            </div>
        )
    });

    return <div className='row m-2 border rounded shadow'>{listGroup}</div>;
}

export default VehiclesCards;