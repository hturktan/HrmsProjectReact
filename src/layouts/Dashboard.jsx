import React from "react";
import Categories from "./Categories";
import { Grid, Container } from "semantic-ui-react";
import Display from "../layouts/Display"


export default function Dashboard() {
  return (
    <div>
      <Container className="main">
        <Grid>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Display />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
