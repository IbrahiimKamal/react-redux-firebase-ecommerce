import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import { CartScreen, HomeScreen } from './Screens';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route exact path="/cart">
          <CartScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
