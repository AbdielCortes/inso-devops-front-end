import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import AboutUs from "./Screens/AboutUs";
import Appointment from "./Screens/Appointment";
import HomePage from "./Screens/HomePage";
import Login from "./Screens/Login";
import ProfileUser from "./Screens/ProfileUser";
import SignUp from "./Screens/SignUp";
import logo from './logo.svg';
import Routes from "./Screens/Routes.js"

function App() {
  return (
    // <div id="root">
    //   <div className="App">
    //       <BrowserRouter>
    //         <Switch>
    //           <Route exact path="/">
    //             <HomePage />
    //           </Route>
    //             <div>
    //               <Route path="/signup" component={SignUp} />
    //               <Route path="/login" component={Login}/>
    //               <Route path="/profileuser" component={ProfileUser}/>
    //               <Route path="/aboutus" component={AboutUs} />
    //               <Route path="/appointment" component={Appointment} />
    //             </div>
    //           <Route component={Error} />
    //         </Switch>
    //       </BrowserRouter>
    //   </div>
    // </div>

    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes />
    </div> 

  );
}

export default App;
