import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className='rounded text-right' id='jumboDiv' data-toggle="tooltip" data-placement="top" title="Laptuna: Castle in the Sky">>
                <img src='logo.png' alt='Studio Ghibli Logo'></img>
            </div>
        );
    }
}

export default Home;