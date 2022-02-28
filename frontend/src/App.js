import React from "react";
import Login from "./Views/Pages/Login/login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Views/sidebar/sidebar";
import ViewBugPage from "./Views/Pages/viewBugs";

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Switch>
            <Route path="/viewBugs">
              <ViewBugPage />
            </Route>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
