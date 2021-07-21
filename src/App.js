import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';

import { HomeScreen } from './Screens';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
