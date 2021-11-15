import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//PAGES
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin/Admin";
import AdminDetails from "./pages/Admin/Details";
import AddAdmin from "./pages/Admin/AddAdmin";
import EditAdmin from "./pages/Admin/EditAdmin";
import Manager from "./pages/Manager/Manager";
import AddManager from "./pages/Manager/AddManager";
import ManagerDetails from "./pages/Manager/Details";
import EditManager from "./pages/Manager/EditManager";
import Company from "./pages/Company/Company";
import AddCompany from "./pages/Company/AddCompany/AddCompany";
import EditCompany from "./pages/Company/EditCompany";
import CompanyShow from "./pages/Company/CompanyShow";

//COMPONENTS
import ResponsiveDrawer from "./components/Drawer";
//MUI
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <ResponsiveDrawer />
        <Box
          component="main"
          className="app"
          sx={{
            marginTop: "4rem",
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/admin/admins">
              <Admin />
            </Route>
            <Route exact path="/admin/admins/details/:id">
              <AdminDetails />
            </Route>
            <Route path="/admin/admins/add">
              <AddAdmin />
            </Route>
            <Route path="/admin/admins/edit/:id">
              <EditAdmin />
            </Route>
            <Route exact path="/admin/managers">
              <Manager />
            </Route>
            <Route path="/admin/managers/add">
              <AddManager />
            </Route>
            <Route path="/admin/managers/details/:id">
              <ManagerDetails />
            </Route>
            <Route path="/admin/managers/edit/:id">
              <EditManager />
            </Route>
            <Route exact path="/admin/companies">
              <Company />
            </Route>
            <Route path="/admin/companies/add">
              <AddCompany />
            </Route>
            <Route path="/admin/companies/edit/:id">
              <EditCompany />
            </Route>
            <Route path="/admin/companies/details/:id">
              <CompanyShow />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
