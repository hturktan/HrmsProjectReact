import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
            <Table.HeaderCell>No </Table.HeaderCell>
            <Table.HeaderCell>Title </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((jobPositions) => (
            <Table.Row key={jobPositions.id}>
              <Table.Cell>{jobPositions.id}</Table.Cell>
              <Table.Cell>
                <Link to={`/jobpositions/${jobPositions.id}`}>
                  {jobPositions.title}
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
