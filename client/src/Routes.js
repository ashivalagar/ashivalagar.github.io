import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header, SocialBar, Navbar, Footer } from "./components";
import { Home, Projects, Contact, Resume, Blog } from "./pages";
import { Container, MainWrapper, ContentWrapper } from "./common/styles";

const Routes = () => {
  const [navState, setNavState] = useState(false);
  const [onHover, setOnHover] = useState(false);

  const toggleMenu = () => {
    setNavState(!navState);
  };

  const handleMouseDown = (e, component) => {
    switch (component) {
      case "parent":
        if (navState) {
          toggleMenu();
          setOnHover(false);
        }
        break;
      case "child":
        toggleMenu();
        setOnHover(false);
        break;

      default:
        break;
    }

    console.log("clicked");
  };

  return (
    <Router>
      <Container>
        <MainWrapper>
          <Header />
          <ContentWrapper>
            <Navbar
              navState={navState}
              onHover={onHover}
              setOnHover={setOnHover}
              handleMouseDown={handleMouseDown}
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
            </Switch>
            <SocialBar />
          </ContentWrapper>
          <Footer />
        </MainWrapper>
      </Container>
    </Router>
  );
};

export default Routes;
