import React, { useState } from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Header, SocialBar, Navbar, Footer } from "./components";
import { Home } from "./pages";
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
        if (navState === true) {
          toggleMenu();
          setOnHover(false);
        }
        break;
      case "child":
        toggleMenu();
        break;

      default:
        break;
    }

    console.log("clicked");
  };

  return (
    <Router>
      <Container onMouseDown={(e) => handleMouseDown(e, "parent")}>
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
