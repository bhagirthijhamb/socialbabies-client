import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={home} />
          <Route path='/signup' component={signup} />
          <Route path='/login' component={login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
