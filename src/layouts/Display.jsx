import React from 'react'
import { Grid, GridColumn } from "semantic-ui-react";
import CandidateList from 'C:/JavaCamp/HRMSreact/hrms-project/src/pages/CandidateList'
import EmployerList from 'C:/JavaCamp/HRMSreact/hrms-project/src/pages/EmployerList'
import JobPositionList from 'C:/JavaCamp/HRMSreact/hrms-project/src/pages/JobPositionList'
import JobAdvertList from 'C:/JavaCamp/HRMSreact/hrms-project/src/pages/JobAdvertList'

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
    )
}
