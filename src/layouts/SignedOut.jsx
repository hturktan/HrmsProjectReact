import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item>
        <Button onClick = {props.signIn} primary>Log In</Button>
        <Button primary style = {{marginleft : "0.5em"}}>Sign Up</Button>
      </Menu.Item>
    </div>
  );
}
