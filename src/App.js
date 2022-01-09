import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes, IsRedirectUser } from './utils/routes';
import { AuthProvider } from './context/AuthContext';
import { Loader } from './globalStyles';
import * as ROUTES from './constants/routes';

const Home = React.lazy(() => import('./pages/Home'))
const Product = React.lazy(() => import('./pages/Product'))
const Signin = React.lazy(() => import('./pages/Signin'))
const Signup = React.lazy(() => import('./pages/Home'))

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <React.Suspense fallback={<Loader />}>
            <Routes>

              <Route
                path={ROUTES.HOME}
                element={
                  <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
                    <Home />
                  </IsRedirectUser>
                }
              />
              <Route path={ROUTES.PRODUCT + '/*'}
                element={
                  <ProtectedRoutes redirectURL={ROUTES.SIGN_IN}>
                    <Product />
                  </ProtectedRoutes>
                }
              >
              </Route>

              <Route path={ROUTES.SIGN_IN}
                element={
                  <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
                    <Signin />
                  </IsRedirectUser>}
              />
              <Route path={ROUTES.SIGN_UP}
                element={
                  <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
                    <Signup />
                  </IsRedirectUser>}
              />
            </Routes>
          </React.Suspense>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
