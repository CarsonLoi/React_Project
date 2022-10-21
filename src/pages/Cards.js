import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Charts from "./Charts";
import "./charts.css";
import { globalState } from "./globalState";
import myJson from "./data.json";
import card_testing from "./card";

const get_data = () => {
  const data = require("./data.json");
  console.log(myJson[globalState.selected]);
};

function Recommendations() {
  return (
    <Container>
      <Row>
        <Col xs="12" lg="6" className="mt-2">
          <Card>
            <Card.Header>Recommendations</Card.Header>
            <Card.Body>
              <Card.Title>Pit {globalState.selected}</Card.Title>
              <Card.Text>Convert 2 x $1,000 tables to $2,000</Card.Text>
              <Button variant="primary" className="mr-2" onClick={get_data}>
                Accept
              </Button>
              <Button variant="warning" className="mr-2">
                Decline
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12" lg="6" className="mt-2">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Minbet</th>
                <th>Current</th>
                <th>Proposed</th>
                <th>Var.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>$500</td>
                <td>20</td>
                <td>22</td>
                <td>+2</td>
              </tr>
              <tr>
                <td>$1,000</td>
                <td>10</td>
                <td>15</td>
                <td>+5</td>
              </tr>
              <tr>
                <td>$2,000</td>
                <td>5</td>
                <td>3</td>
                <td>-2</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="mt-2" style={{ "overflow-x": "auto" }}>
        <div class="chartWrapper">
          <div class="chartAreaWrapper">
            <Charts />
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Recommendations;
