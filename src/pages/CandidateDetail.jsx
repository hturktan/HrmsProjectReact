import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";
import CandidateService from "../services/candidateService";

export default function CandidateDetail() {
  let { id } = useParams();

  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getById(id)
      .then((result) => setCandidate(result.data.data));
  }, [id]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Candidate</Table.HeaderCell>
            <Table.HeaderCell>Info</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Candidate Name</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>
              {candidate.firstName + " " + candidate.lastName}
            </Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Email</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{candidate.email}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
