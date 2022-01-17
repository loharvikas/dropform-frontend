import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes, IsRedirectUser } from './utils/routes';
import { AuthProvider } from './context/AuthContext';
import { Loader } from './globalStyles';
import * as ROUTES from './constants/routes';
import { NotFound } from './pages';

const Home = React.lazy(() => import('./pages/Home'))
const Product = React.lazy(() => import('./pages/Product'))
const Signin = React.lazy(() => import('./pages/Signin'))
const Signup = React.lazy(() => import('./pages/Signup'))
const TermsOfUse = React.lazy(() => import('./pages/TermsOfUse'))
const Privacy = React.lazy(() => import('./pages/Privacy'))
// const NotFound = React.lazy(() => import('./pages/NotFound'))

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
              <Route
                path={ROUTES.TERMS_OF_USE}
                element={
                  <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
                    <TermsOfUse />
                  </IsRedirectUser>
                }
              />
              <Route
                path={ROUTES.PRIVACY_POLICY}
                element={
                  <IsRedirectUser loggedInPath={ROUTES.REDIRECT}>
                    <Privacy />
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
              <Route path='*'
                element={
                  <NotFound />
                }
              />
            </Routes>
          </React.Suspense>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
