import React, { useEffect, useState } from 'react'
import { Header, Table } from 'semantic-ui-react'
import CandidateService from 'C:/JavaCamp/HRMSreact/hrms-project/src/services/candidateService'

export default function Candidate() {
    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then((result) => setCandidates(result.data.data));
    }, []);

    return (
        <div>
            <Header as="h3">
                <Header.Content>Candidate List</Header.Content>
            </Header>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email Address</Table.HeaderCell>
                        <Table.HeaderCell>Details</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        candidates.map(candidate => (
                            <Table.Row key={candidate.id}>
                                <Table.Cell>{candidate.firstName}</Table.Cell>
                                <Table.Cell>{candidate.lastName}</Table.Cell>
                                <Table.Cell>{candidate.email}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
