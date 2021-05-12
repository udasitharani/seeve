import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Login from "./pages/login";

const App: React.FC = () => {
  if (document.cookie.slice(0, 4) !== "jwt=") return <Login />;

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="flex flex-row p-4 h-full divide-x divide-light-blue-400">
            <Sidebar />
            <div></div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
