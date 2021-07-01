import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import MagazinesPage from "./magazines";
import LiturgicalReflectionsPage from "./liturgicalreflections";
import ChoirPage from "./choir";
import { Switch, Route, Router } from "./../util/router.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import { ThemeProvider } from "./../util/theme.js";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
            logo="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/DarkLogo.png"
            logoInverted="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/LightLogo.png"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/Magazines" component={MagazinesPage} />

            <Route
              exact
              path="/LiturgicalReflections"
              component={LiturgicalReflectionsPage}
            />

            <Route exact path="/Choir" component={ChoirPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="normal"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2021 George Aziz"
            github="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/GitHubDark.png"
            githubInverted="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/GitHubLight.png"
            linkedin="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/LinkedInDark.png"
            linkedinInverted="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/LinkedInLight.png"
            facebook="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/FacebookDark.png"
            facebookInverted="https://voicefromheaven.s3-ap-southeast-1.amazonaws.com/Images/FacebookLight.png"
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
