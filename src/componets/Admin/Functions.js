import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import addVideo from "./addVideo";
import ShowVideo from "./ShowVideo";
import Prof from "./Prof";
import ProfileEdit from "./ProfileEdit";
import orders from "./orders";

function App() {
  return (
    <Router>
      <div className="">
        <AdminNavbar />
        {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

        <Switch>
          <Route exact path={"/vendor/Home"} component={AdminHome} />
          {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
          <Route path={"/vendor/addVideo"} component={addVideo} />
          <Route path={"/vendor/ShowVideo"} component={ShowVideo} />
          <Route path={"/vendor/Profile"} component={Prof} />
          <Route path={"/vendor/ProfileEdit"} component={ProfileEdit} />
          <Route path={"/vendor/orders"} component={orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
