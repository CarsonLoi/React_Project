import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import myJson from "../pages/data.json";
import response from "../pages/data/response.json";

function Card_display(props) {
  const data = myJson[props.pit];

  this.showKey = () => {
    console.log(response[props.pit]);
  };

  this.setFalse = () => {
    response[props.pit] = false;
    {
      /*const fs = require('fs');
    fs.writeFile('../pages/data/response.json', 'response', (err) => {
      if (err) console.log('Error writing file:', err);
  })*/
    }
  };

  return (
    <Col xs="12" lg="6" className="mt-2">
      <Card>
        <Card.Header>Recommendations</Card.Header>
        <Card.Body>
          <Card.Title>Pit {props.pit}</Card.Title>
          {data.map((statement, index) => (
            <Card.Text>
              {index + 1}. {statement}
            </Card.Text>
          ))}
          {/*<Card.Text>{data[props.pit][0]}</Card.Text>*/}
          <Button variant="primary" className="mr-2" onClick={this.showKey}>
            Accept
          </Button>
          <Button variant="warning" className="mr-2" onClick={this.setFalse}>
            Decline
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Card_display;
