import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import DetailView from './views/DetailView';

export default function App() {
  return (
    <Switch>
      <Route path exact="/">
        <Home />
      </Route>
      <Route path exact="/detail/:id">
        <DetailView />
      </Route>
    </Switch>
  );
}
