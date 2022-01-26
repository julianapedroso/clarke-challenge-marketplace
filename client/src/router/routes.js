import React from 'react';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
// Components
import { Home, Signin } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" exact element={<Home />} />
      </Router>
      <Router>
        <Route path="/signin" exact element={<Signin />} />
      </Router>
    </BrowserRouter>
  );
};

export default Routes;
