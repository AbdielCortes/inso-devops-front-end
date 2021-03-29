import {BrowserRouter, Route, Switch} from 'react-router-dom';

import AboutUs from './Screens/AboutUs';
import Appointment from './Screens/Appointment';
import HomePage from './Screens/HomePage';
import Login from './Screens/Login';
import ProfileUser from './Screens/ProfileUser';
import React from 'react';
import SignUp from './Screens/SignUp';

function Routes() {
    return (
        <div className="Routes">
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/appointment" component={Appointment} />
            <Route path="/profileuser" component={ProfileUser} />
            <Route component={Error} />
            </Switch>
        </BrowserRouter>
        </div>
    );
}

export default Routes;