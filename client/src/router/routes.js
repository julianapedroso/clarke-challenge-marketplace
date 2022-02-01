import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes as Router,
  Route,
  Navigate,
} from 'react-router-dom';
// Components
import { Home, Signup, Signin, ProviderDetails } from '../pages';
// Context
import { AuthProvider, AuthContext } from '../context/auth';

const Routes = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <p>carregando...</p>;
    }

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
        <Router>
          <Route path="/:_id" exact element={<ProviderDetails />} />
        </Router>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
