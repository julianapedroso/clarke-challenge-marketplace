import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes as Router,
  Route,
  Navigate,
} from 'react-router-dom';
// Components
import { Home, Signup, Signin } from '../pages';
// Context
import { AuthProvider, AuthContext } from '../context/auth';

const Routes = () => {
  const Private = ({ children }) => {
    const { authenticated } = useContext(AuthContext);

    if (!authenticated) {
      return <Navigate to="/signin" />;
    }

    return children;
  };
  return (
    <BrowserRouter>
      <AuthProvider>
        <Router>
          <Route
            path="/"
            exact
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Router>
        <Router>
          <Route path="/signin" exact element={<Signin />} />
        </Router>
        <Router>
          <Route path="/signup" exact element={<Signup />} />
        </Router>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
