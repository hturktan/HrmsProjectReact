import React, { useEffect, useState } from 'react'
import { Button, Header , Table } from 'semantic-ui-react'
import JobAdvertService from 'C:/JavaCamp/HRMSreact/hrms-project/src/services/jobAdvertService';

export default function JobAdvertList() {

    const [jobAdverts, setJobAdverts] = useState([])

    useEffect(() => {
        let jobAdvertService = new JobAdvertService()
        jobAdvertService.getJobAdverts().then(result => setJobAdverts(result.data.data))
    }, [])

    return (
        <div>
            <Header as="h3">
                <Header.Content>Job Advert List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Deadline Date</Table.HeaderCell>
                        <Table.HeaderCell>Minimum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Maximmum Salary</Table.HeaderCell>
                        <Table.HeaderCell>Number of Open Positions</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdverts.map(jobAdvert => (
                            <Table.Row key={jobAdvert.id}>
                                <Table.Cell>{jobAdvert.jobPosition.title}</Table.Cell>
                                <Table.Cell>{jobAdvert.desctiption}</Table.Cell>
                                <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobAdvert.deadline}</Table.Cell>
                                <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
                                <Table.Cell>{jobAdvert.salaryMax}</Table.Cell>
                                <Table.Cell>{jobAdvert.openPositionNumber}</Table.Cell>
                                <Table.Cell><Button>View</Button></Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
