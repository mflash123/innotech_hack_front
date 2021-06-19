import { AppBar, Button, Container, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Dashboard from './component/Dashboard/Dashboard';


function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
          >
            <Route exact path="/">


              <Grid item xs={12}>
                <Grid xs={12}>
                  <img src="https://contestfiles.s3.eu-central-1.amazonaws.com/contests/TwJ42gd2_1621593570.png" />
                </Grid>
                <Grid xs={12}>
                  <Link to="/dashboard" component={Button}>Login</Link>
                </Grid>
              </Grid>

            </Route>
            <Route path="/dashboard">
              <AppBar position="static" color="transparent">
                <Toolbar>
                  <img src="https://contestfiles.s3.eu-central-1.amazonaws.com/contests/TwJ42gd2_1621593570.png" />
                </Toolbar>
              </AppBar>
              <Dashboard />
            </Route>
          </Grid>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;