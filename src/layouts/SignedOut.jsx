import React from "react";
import { Button, Menu, MenuMenu } from "semantic-ui-react";

export default function SignedOut() {
  return (
    <div>
      <Menu.Item>
        <Button primary>Log In</Button>
        <Button primary style = {{marginleft : "0.5em"}}>Sign In</Button>
      </Menu.Item>
    </div>
  );
}
