import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdvertDetail() {
  let { id } = useParams();

  const [jobAdvert, setJobAdvert] = useState([]);

  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getById(id)
      .then((result) => setJobAdvert(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Advert</Table.HeaderCell>
            <Table.HeaderCell>Info</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Job Title</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.jobPosition.title}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Company Name</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Description</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.description}</Table.Cell>
          </Table.Row>

           <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Minimum Salary</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.salaryMin}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Maximum Salary</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.salaryMax}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Number of Open Position</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.openPositionNumber}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Working Type</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.workingType.workType}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Working Hours</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.workingHour.workingHours}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Deadline</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{jobAdvert.deadline}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
