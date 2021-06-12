import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertList from "../pages/JobAdvertList";
import JobPositionList from "../pages/JobPositionList";

export default function Display() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <GridColumn size={12}>
            <CandidateList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={12}>
            <EmployerList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={12}>
            <JobPositionList />
          </GridColumn>
        </Grid.Row>
        <Grid.Row>
          <GridColumn size={12}>
            <JobAdvertList />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
