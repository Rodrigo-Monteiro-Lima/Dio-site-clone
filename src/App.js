import Home from "./pages/home";
import Feed from './pages/feed';
import Login from './pages/login';
import { Route, Switch, } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/feed" component={Feed} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default App;
