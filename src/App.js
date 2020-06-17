import React from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import { Grid } from './components/Grid'
import Leads from './components/Leads'
import Opportunities from './components/Opportunities'
import { GlobalStyle } from './components/GlobalStyle/'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import 'reset-css'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Grid>
          <Header />
          <Route exact path='/about' component={Leads}></Route>
          <Route exact path='/Opportunities' component={Opportunities}></Route>
          <Navbar />
          <Leads />
          <Opportunities />
        </Grid>
      </Router>
    </>
  )
}

export default App
