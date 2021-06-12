import React, { useState, useEffect } from "react";
import { Header, Table } from "semantic-ui-react";
import JobPositionService from "C:/JavaCamp/HRMSreact/hrms-project/src/services/jobPositionService";

export default function JobPosition() {
  const [jobPositions, setJobPositions] = useState([]);

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPositions()
      .then((result) => setJobPositions(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3">
        <Header.Content>Job Position List</Header.Content>
      </Header>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPositions) => (
            <Table.Row key={jobPositions.id}>
              <Table.Cell>{jobPositions.title}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>
    </div>
  );
}
