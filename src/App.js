import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProtectedRoutes, IsRedirectUser } from './utils/routes';
import { AuthProvider } from './context/AuthContext';
import * as ROUTES from './constants/routes';
import { Home, App as Product, Signin, Signup} from './pages';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route 
                path={ROUTES.HOME}
                element={
                    <IsRedirectUser loggedInPath={ROUTES.APP}>
                      <Home />
                    </IsRedirectUser>
                }
              />
            <Route  path={ROUTES.APP + '/*'} 
                    element={
                    <ProtectedRoutes redirectURL={ROUTES.SIGN_IN}>
                      <Product />
                    </ProtectedRoutes>
                    }
            />

            <Route path={ROUTES.SIGN_IN} 
                  element={ 
                  <IsRedirectUser loggedInPath={ROUTES.APP}>
                      <Signin />
                  </IsRedirectUser>} 
                />
            <Route path={ROUTES.SIGN_UP}  
                  element={ 
                  <IsRedirectUser loggedInPath={ROUTES.APP}>
                      <Signup />
                  </IsRedirectUser>} 
                />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
