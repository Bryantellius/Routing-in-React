import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Films from './Film Components/Films';
import People from './People Components/People';
import Locations from './Location Components/Locations';
import Species from './Species Components/Species';
import Vehicles from './Vehicle Components/Vehicles';
import Footer from './Footer';

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
                        <Route path='/locations' component={Locations}/>
                        <Route path='/species' component={Species}/>
                        <Route path='/vehicles' component={Vehicles}/>
                    </Switch>
                    <Footer />
                </Fragment>
            </Router>
        )
    }
}

export default App;