import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, App as Product } from './pages';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={ROUTES.APP + '/*'} element={<Product />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
