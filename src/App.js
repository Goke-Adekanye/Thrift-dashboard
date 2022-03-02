import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//PAGES
import Dashboard from './pages/Dashboard';
import JoinAjo from './pages/JoinAjo';
import AjoDetail from './pages/AjoDetail';
import AjoPeriodicalMembers from './pages/AjoPeriodicalMembers';
import AjoAnnualMembers from './pages/AjoAnnualMembers';
import AjoProductMembers from './pages/AjoProductMembers';
import CreateAjo from './pages/CreateAjo';
//COMPONENTS
import ResponsiveDrawer from './components/Drawer';
//MUI
import Box from '@mui/material/Box';

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <div className='flex'>
        <ResponsiveDrawer />
        <Box
          component='main'
          sx={{
            marginTop: '5rem',
            flexGrow: 1,
            p: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}>
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/ajo/join'>
              <JoinAjo />
            </Route>
            <Route path='/ajo/detail/:id'>
              <AjoDetail />
            </Route>
            <Route path='/ajo/members/periodical/:id'>
              <AjoPeriodicalMembers />
            </Route>
            <Route path='/ajo/members/annual/:id'>
              <AjoAnnualMembers />
            </Route>
            <Route path='/ajo/members/product/:id'>
              <AjoProductMembers />
            </Route>
            <Route path='/ajo/create'>
              <CreateAjo />
            </Route>
          </Switch>
        </Box>
      </div>
    </Router>
  );
}

export default App;
