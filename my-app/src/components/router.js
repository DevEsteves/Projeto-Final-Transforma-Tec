import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './home';

const RouterApp = ({open}) => {
    return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/api/users/:username/details" component={Home}>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default RouterApp;