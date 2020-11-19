import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';

import Grid from '@material-ui/core/Grid';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';
import Header from './components/Header'
import Aside from './components/Aside';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Grid container spacing={6}>
            <Grid item sm={3} xs={12}>
                <h2>Header</h2>
                <Header />
            </Grid>
            <Grid item sm={6} xs={12}>
              <Route exact path='/' component={home} />
              <Route path='/signup' component={signup} />
              <Route path='/login' component={login} />
              
            </Grid>
            <Grid item sm={3} xs={12}>
              <Aside />
            </Grid>
          </Grid>

          <Switch>
            {/* <Route exact path='/' component={home} /> */}
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
