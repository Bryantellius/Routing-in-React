import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <nav className='row py-3 border'>
                <ul className="nav">
                    <li className="nav-item mx-3">
                        <Link to='/' className='nav-link'>Home</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to='/films' className='nav-link'>Films</Link>
                    </li>
                    <li className="nav-item mx-3">
                        <Link to='/people' className='nav-link'>People</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavBar;