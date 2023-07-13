import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Github_info from './Github_info';

const RouterApp = () => {
    return(
      <>
          <BrowserRouter>
              <Routes>
                <Route path="/api/users/:username/details" component={Github_info}>
                </Route>
              </Routes>
          </BrowserRouter>
      </>
    )
}

export default RouterApp;