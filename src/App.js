import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import { CartScreen, HomeScreen, RegisterScreen, LoginScreen } from './Screens';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/register">
          <RegisterScreen />
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
