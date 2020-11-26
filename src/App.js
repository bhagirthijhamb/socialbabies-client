import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import jwtDecode from 'jwt-decode';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import user from './pages/user';
// Components
import Authroute from './utils/AuthRoute';
import TopNavbar from './components/TopNavbar'
// Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import { SET_AUTHENTICATED } from './redux/types';
import { logoutUser, getUserData } from './redux/actions/userActions';
import axios from 'axios';

// let authenticated;

const token = localStorage.FBIdToken;
// console.log(token);

if(token){
  const decodedToken = jwtDecode(token);
  if(decodedToken.exp * 1000 < Date.now()){
    store.dispatch(logoutUser());
    window.location.href = '/login';
    // authenticated = false;
  } else {
    // authenticated = true;
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <Provider store={store}>
        <Router>
          <TopNavbar />
          <div className="container">
            <Switch>
                <Route exact path='/' component={home} />
                {/* <Route path='/signup' component={signup} />
                <Route path='/login' component={login} /> */}
                {/* <Authroute path='/signup' component={signup} authenticated={authenticated} />
                <Authroute path='/login' component={login} authenticated={authenticated} /> */}
                <Authroute path='/signup' component={signup} />
                <Authroute path='/login' component={login} />
                <Route exact path='/users/:handle' component={user} />
            </Switch>
          </div>
        </Router>
    </Provider>
    
  );
}

export default App;
