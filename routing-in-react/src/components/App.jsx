import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Films from './Films';
import People from './People';

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <NavBar />
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