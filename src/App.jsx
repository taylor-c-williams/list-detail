import { Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import DetailView from './views/DetailView/DetailView';
import './App.css';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/detail/:id">
        <DetailView />
      </Route>
    </Switch>
  );
}
