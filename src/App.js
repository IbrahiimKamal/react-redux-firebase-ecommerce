import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './Components/Navbar/Navbar';

import {
  CartScreen,
  HomeScreen,
  RegisterScreen,
  LoginScreen,
  RegisterCompleteScreen,
} from './Screens';

const App = () => {
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
