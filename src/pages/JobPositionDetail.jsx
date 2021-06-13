import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionDetail() {
  let { id } = useParams();

  const [jobPosition, setJobPosition] = useState({});

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .findById(id)
      .then((result) => setJobPosition(result.data.data));
  }, [id]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Position</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Job Position Title</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobPosition.title}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
