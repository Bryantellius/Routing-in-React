import React from 'react';

function SpeciesCards(props) {
    const listGroup = props.arr.map((species) => {
        return (
            <div key={species.id} className='col-md-6 p-2'>
                <h4>{species.name}</h4>
                <p>{species.classification}<br></br>
                    Eye Color: {species.eye_color}<br></br>
                    Hair Color: {species.hair_colors}</p>
            </div>
        )
    });

    return <div className='row m-2 border rounded shadow'>{listGroup}</div>;
}

export default SpeciesCards;