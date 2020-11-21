import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import jwtDecode from 'jwt-decode';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

let authenticated;

const token = localStorage.FBIdToken;
console.log(token);

if(token){
  const decodedToken = jwtDecode(token);
  console.log(decodedToken)
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Switch>
              <Route exact path='/' component={home} />
              <Route path='/signup' component={signup} />
              <Route path='/login' component={login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
