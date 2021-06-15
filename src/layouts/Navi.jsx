import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { Link, useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory()
  function handleSignOut() {
    setIsAuthenticated(false);
    history.push("/")
  }

  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fix="top">
        <Container>
          <Menu.Item as={Link} to={"/"}>
            Home
          </Menu.Item>
                  
        <Menu.Item as={Link} to={"/jobadverts"}>
          Job Adverts
        </Menu.Item>

        <Menu.Item as={Link} to={"/jobadvertcreate"}>
          Job Advert Create
        </Menu.Item>


          <Menu.Menu position="right">
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} signingOut="1" />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}

