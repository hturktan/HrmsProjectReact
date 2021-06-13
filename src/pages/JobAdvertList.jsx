import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Table } from "semantic-ui-react";
import JobAdvertService from "C:/JavaCamp/HRMSreact/hrms-project/src/services/jobAdvertService";

export default function JobAdvert() {
  const [jobAdverts, setJobAdverts] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdverts()
      .then((result) => setJobAdverts(result.data.data));
  }, []);

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
            <Table.HeaderCell>Working Hour</Table.HeaderCell>
            <Table.HeaderCell>Working Type</Table.HeaderCell>
            <Table.HeaderCell>Number of Open Positions</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdverts) => (
            <Table.Row key={jobAdverts.id}>
              <Table.Cell>{jobAdverts.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobAdverts.desctiption}</Table.Cell>
              <Table.Cell>{jobAdverts.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdverts.deadline}</Table.Cell>
              <Table.Cell>{jobAdverts.salaryMin}</Table.Cell>
              <Table.Cell>{jobAdverts.salaryMax}</Table.Cell>
              <Table.Cell>{jobAdverts.workingHour.workingHours}</Table.Cell>
              <Table.Cell>{jobAdverts.workingType.workType}</Table.Cell>
              <Table.Cell>{jobAdverts.openPositionNumber}</Table.Cell>
              <Table.Cell>
                <Button><Link to={`/jobadverts/${jobAdverts.id}`}>View</Link></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
