import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Films from './Films';
import People from './People';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Link to='/'><button>Home</button></Link>
                    <Link to='/films'><button>Films</button></Link>
                    <Link to='/people'><button>People</button></Link>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/films' component={Films}/>
                        <Route path='/people' component={People}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App;