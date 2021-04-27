import {Route, Router, Switch} from 'react-router-dom';

import AboutUs from './AboutUs';
import Appointment from './Appointment';
import AppointmentDoc from './AppointmentDoc'
import HomePage from './HomePage';
import Login from './Login';
import ProfileP from './ProfileP';
import ProfileUser from './ProfileUser';
import React from 'react';
import SignUp from './SignUp';
import history from "./History"
import DoctorInfo from "./DoctorInfo";

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
                <Route path="/appointmentDoc" component={AppointmentDoc} />
                <Route path="/profileuser" component={ProfileUser} />
                <Route path="/patientp" component={ProfileP} />
                <Route path="/doctorinfo" component={DoctorInfo} />
                <Route component={Error} />
            </Switch>
        </Router>
        </div>
    );
}

export default Routes;