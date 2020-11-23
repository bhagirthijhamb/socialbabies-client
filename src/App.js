import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import jwtDecode from 'jwt-decode';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

// Components
import Authroute from './utils/AuthRoute';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

let authenticated;

const token = localStorage.FBIdToken;
console.log(token);

if(token){
  const decodedToken = jwtDecode(token);
  console.log('decoded token', decodedToken)
  console.log(decodedToken.exp * 1000, Date.now())
  console.log(decodedToken.exp * 1000 < Date.now())
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login';
    authenticated = false;
  } else {
    authenticated = true;
  }
}

function App() {
  return (
    <Provider store={store}>
        <Router>
          <div className="container">
            <Switch>
                <Route exact path='/' component={home} />
                <Authroute path='/signup' component={signup} authenticated={authenticated} />
                <Authroute path='/login' component={login} authenticated={authenticated} />
                {/* <Route path='/signup' component={signup} />
                <Route path='/login' component={login} /> */}
            </Switch>
          </div>
        </Router>
    </Provider>
    
  );
}

export default App;
