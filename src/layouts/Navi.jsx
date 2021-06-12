import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navi() {
  return (
    <div>
      <Menu inverted fix="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="job adverts" />

          <Menu.Menu position="right">
            <SignedOut />
            <SignedIn />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
