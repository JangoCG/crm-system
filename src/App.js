import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Grid } from './components/Grid'
import Leads from './components/Leads'
import Opportunities from './components/Opportunities'
import { GlobalStyle } from './components/GlobalStyle/'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import LeadState from './context/lead/LeadState'
import './App.css'

import 'reset-css'

const App = () => {
  return (
    <>
      <LeadState>
        <GlobalStyle />
        <Router>
          <Grid>
            <Header />
            <Switch>
              <Route path='/Leads' component={Leads}></Route>
              <Route path='/Opportunities' component={Opportunities}></Route>
              {/* <Route exact path='/Customers' component={Customers}></Route>
          <Route exact path='/Opportunities' component={Opportunities}></Route> */}
            </Switch>
            <Navbar />
          </Grid>
        </Router>
      </LeadState>
    </>
  )
}

export default App
