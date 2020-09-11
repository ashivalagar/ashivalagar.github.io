import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header, SocialBar, Navbar, Footer } from "./components";
import { Home } from "./pages";
import { Container, MainWrapper, ContentWrapper } from "./common/styles";

const Routes = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <MainWrapper>
          <Header />
          <ContentWrapper>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </ContentWrapper>
          <Footer />
        </MainWrapper>
        <SocialBar />
      </Container>
    </Router>
  );
};

export default Routes;
