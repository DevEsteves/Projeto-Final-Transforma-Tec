import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './home';

const RouterApp = ({open}) => {
    return(
      <>
  
<Router>
  <Switch>
    <Route path="/api/users/:username/details" component={Home}>
    </Route>
  </Switch>
 
  </Router>
  </>
    )
}

export default RouterApp;