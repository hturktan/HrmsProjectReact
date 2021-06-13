import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, Table } from "semantic-ui-react";
import EmployerService from "../services/employerService";


export default function EmployerDetail() {
  let { id } = useParams();

  const [employer, setEmployer] = useState([]);
 ;

  useEffect(() => {
    let employerService = new EmployerService();
    
    employerService.getById(id).then((result) => setEmployer(result.data.data));
  }, [id]);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Employer</Table.HeaderCell>
            <Table.HeaderCell>Info</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Company Name</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.companyName}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Web Address</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.webAddress}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Email</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.email}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>
              <Header as="h4">
                <Header.Content>Telephone Number</Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{employer.phoneNumber}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
