import React from "react";
import Login from "./Views/Pages/Login/login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Views/sidebar/sidebar";
import Dashboard from "./Views/Pages/Dashboard/dashboard";
import ViewBugPage from "./Views/Pages/viewBugs";
import CreateBug from "./Views/Components/Bug Create & edit/bugForm";

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
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/viewBugs">
              <ViewBugPage />
            </Route>
            <Router path="/create">
              <div className="page-container">
                <CreateBug title="Create Bug" />
              </div>
            </Router>
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
