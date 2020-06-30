import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Grid } from './components/Grid';
import LeadForm from './components/Leads/LeadForm';
import Opportunities from './components/Opportunities';
import { GlobalStyle } from './components/GlobalStyle/';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import LeadState from './context/lead/LeadState'
import { LeadProvider } from './context/LeadContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'reset-css';

const App = () => {
  return (
    <LeadProvider>
      <GlobalStyle />
      <Router>
        <Grid>
          <Header />
          <Switch>
            <Route path="/Leads" component={LeadForm}></Route>
            <Route path="/Opportunities" component={Opportunities}></Route>
          </Switch>
          <Navbar />
        </Grid>
      </Router>
    </LeadProvider>
  );
};

export default App;
