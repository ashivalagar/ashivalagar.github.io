import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./pages";
import { Container, AlignContent, ContentWrapper } from "./common/styles";

const Routes = () => {
  return (
    <Router>
      <Container>
        <AlignContent>
          <ContentWrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </ContentWrapper>
        </AlignContent>
      </Container>
    </Router>
  );
};

export default Routes;
