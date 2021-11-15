import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Sidebar from "./components/sidebar";
import "./App.css";
import { Grid } from "@material-ui/core";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import AdminList from "./pages/adminList";
import AgentList from "./pages/agentList";
import EstateManagerList from "./pages/estateManagerList";
import CreateAdmin from "./pages/createAdmin";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Grid container className="app">
          <Grid item sm={3} xs={2}>
            <Sidebar />
          </Grid>
          <Grid item sm={9} xs={10}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/agents">
                <AgentList />
              </Route>
              <Route path="/admins">
                <AdminList />
              </Route>
              <Route path="/admin/managers">
                <EstateManagerList />
              </Route>
              <Route path="/admin/admins/add">
                <CreateAdmin />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
