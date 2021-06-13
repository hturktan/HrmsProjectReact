import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item as={NavLink} to={"/candidates"}>
          Candidates
        </Menu.Item>

        <Menu.Item as={NavLink} to={"/employers"}>
          Employers
        </Menu.Item>

        <Menu.Item as={NavLink} to={"/jobpositions"}>
          Job Positions
        </Menu.Item>
        
        <Menu.Item as={NavLink} to={"/jobadverts"}>
          Job Adverts
        </Menu.Item>
      </Menu>
    </div>
  );
}
