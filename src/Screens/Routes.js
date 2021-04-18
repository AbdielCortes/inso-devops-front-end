import {Router, Route, Switch} from 'react-router-dom';

import history from "./History"
import AboutUs from './AboutUs';
import Appointment from './Appointment';
import HomePage from './HomePage';
import Login from './Login';
import ProfileUser from './ProfileUser';
import ProfileP from './ProfileP';
import React from 'react';
import SignUp from './SignUp';

function Routes() {
    return (
        <div className="Routes">
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/aboutus" component={AboutUs} />
                <Route path="/appointment" component={Appointment} />
                <Route path="/profileuser" component={ProfileUser} />
                <Route path="/patientp" component={ProfileP} />
                <Route component={Error} />
            </Switch>
        </Router>
        </div>
    );
}

export default Routes;