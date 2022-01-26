import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
// Components
import { Home, Signup, Signin } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
      <Router>
        <Route path="/signin" exact element={<Signin />} />
      </Router>
      <Router>
        <Route path="/signup" exact element={<Signup />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
