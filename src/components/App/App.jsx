import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../TechnolgyPage/TechnolgyPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import RoomProfiles from '../RoomProfiles/RoomProfiles';
import CreateRoom from '../CreateRoom/CreateRoom';
import RoomOverview from '../RoomOverview/RoomOverview';
import AppliancesElectronicsForm from '../Forms/AppliancesElectronicsForm/AppliancesElectronicsForm';
import DecorForm from '../Forms/DecorForm/DecorForm';
import MiscellaneousForm from '../Forms/MiscellaneousForm/MiscellaneousForm';
import PaintColorForm from '../Forms/PaintColorForm/PaintColorForm';
import TechnolgyPage from '../TechnolgyPage/TechnolgyPage';

// import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/room-profiles" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/room-profiles" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            <LandingPage />
          </Route>
          <ProtectedRoute
            exact
            path="/room-profiles"
          >
            <RoomProfiles />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/create-room"
          >

            <CreateRoom />
          </ProtectedRoute>
          <ProtectedRoute
            exact
            path="/room-overview/:id"
          >

            <RoomOverview />
          </ProtectedRoute>

          <Route
            exact
            path="/app-elec-form/:id">
            <AppliancesElectronicsForm />
          </Route>

          <Route
            exact
            path="/app-elec-form/:id/:formId">
            <AppliancesElectronicsForm />
          </Route>

          <Route
            exact
            path="/decor-form/:id">
            <DecorForm />
          </Route>

          <Route
            exact
            path="/decor-form/:id/:formId">
            <DecorForm />
          </Route>

          <Route
            exact
            path="/misc-form/:id">
            <MiscellaneousForm />
          </Route>

          <Route
            exact
            path="/misc-form/:id/:formId">
            <MiscellaneousForm />
          </Route>

          <Route
            exact
            path="/paint-form/:id">
            <PaintColorForm />
          </Route>

          <Route
            exact
            path="/paint-form/:id/:formId">
            <PaintColorForm />
          </Route>

          <Route
            exact
            path="/techonoly-page"
          >
            <TechnolgyPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
