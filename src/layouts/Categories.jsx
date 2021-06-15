import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item as={Link} to={"/candidates"}>
          Candidates
        </Menu.Item>

        <Menu.Item as={Link} to={"/employers"}>
          Employers
        </Menu.Item>

        <Menu.Item as={Link} to={"/jobpositions"}>
          Job Positions
        </Menu.Item>

      </Menu>
    </div>
  );
}
