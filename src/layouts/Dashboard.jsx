import React from "react";
import Categories from "./Categories";
import { Grid, Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import CandidateList from "../pages/CandidateList";
import EmployerList from "../pages/EmployerList";
import JobAdvertList from "../pages/JobAdvertList";
import JobPositionList from "../pages/JobPositionList";
import JobPositionDetail from "../pages/JobPositionDetail";
import JobAdvertDetail from "../pages/JobAdvertDetail";
import EmployerDetail from "../pages/EmployerDetail";
import CandidateDetail from "../pages/CandidateDetail";

export default function Dashboard() {
  return (
    <div>
      <Container className="main">
        <Grid>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact exact path= "/candidates" component = {CandidateList}/>
            <Route path= "/candidates/:id" component = {CandidateDetail}/>
            <Route exact path= "/employers" component = {EmployerList}/>
            <Route path= "/employers/:id" component = {EmployerDetail}/>
            <Route exact path= "/jobpositions" component = {JobPositionList}/>
            <Route path= "/jobpositions/:name" component = {JobPositionDetail}/>
            <Route path= "/jobadverts" component ={JobAdvertList} />
            <Route exact path= "/jobadverts/:id" component = {JobAdvertDetail}/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
