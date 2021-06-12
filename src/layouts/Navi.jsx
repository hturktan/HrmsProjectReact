import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  function handleSignOut() {
    setIsAuthenticated(false)
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }


  return (
    <div>
      <Menu inverted fix="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="job adverts" />

          <Menu.Menu position="right">
            {isAuthenticated?<SignedIn signOut={handleSignOut} signingOut="1"/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
