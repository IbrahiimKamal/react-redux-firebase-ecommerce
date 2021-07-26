import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import { CartScreen, HomeScreen, RegisterScreen } from './Screens';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact">
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
