import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { Profile, Footer, Header } from "./components";
import { Portfolio, Resume } from "./pages";

export default function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route exact path="/">
                  <Resume />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
