import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Search from "./pages/Search";
import Articles from "./pages/Articles";
import CommunityBoard from "./pages/CommunityBoard";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
         <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/"]}>
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
          <Route exact path="/communityboard">
            <CommunityBoard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
