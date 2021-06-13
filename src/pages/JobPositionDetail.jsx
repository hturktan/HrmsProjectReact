import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionDetail() {
  let { id } = useParams();

  const [jobPosition, setJobPosition] = useState({});

  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .findById(id)
      .then((result) => setJobPosition(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Card.Header>{id}</Card.Header>
            <Card.Meta>{jobPosition.title}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
