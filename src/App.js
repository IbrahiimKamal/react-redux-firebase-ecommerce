import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth } from './Firebase';

import Navbar from './Components/Navbar/Navbar';

import {
  CartScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  RegisterCompleteScreen,
  ForgotPasswordScreen,
} from './Screens';

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();

        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            userEmailAddress: user.email,
            userDisplayName: user.displayName,
            token: idTokenResult.token,
          },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
          <ToastContainer />
        </Route>
        <Route exact path="/register">
          <RegisterScreen />
          <ToastContainer />
        </Route>
        <Route exact path="/register/complete">
          <RegisterCompleteScreen />
          <ToastContainer />
        </Route>
        <Route exact path="/forgot/password">
          <ForgotPasswordScreen />
          <ToastContainer />
        </Route>
        <>
          <Navbar />
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/cart">
            <CartScreen />
          </Route>
        </>
      </Switch>
    </Router>
  );
};

export default App;
