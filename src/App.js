import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BasicReact from "./pages/basic/React";
import Login from "./pages/auth/Login";
import BasicLogin from "./pages/basic/Login";
import BasicHome from "./pages/basic/Home";
import BasicMovieDetail from "./pages/basic/DetailMovie";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/basic-react" exact component={BasicReact} />
          <Route path="/login" exact component={Login} />
          <Route path="/basic-login" exact component={BasicLogin} />
          <Route path="/basic-home" exact component={BasicHome} />
          {/* Cara kedua dan tiga */}
          {/* <Route path="/basic-detail" exact component={BasicMovieDetail} /> */}
          <Route path="/basic-detail/:movieId" exact component={BasicMovieDetail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
