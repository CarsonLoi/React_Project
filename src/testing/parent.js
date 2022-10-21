import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

import Card_display from "./card";
import Table_display from "./table";
import Demand_Chart from "./demand_chart";
import Demand_Chart2 from "./demand_chart2";
import "./demand_chart.css";
import React from "react";
import myJson from "../pages/data.json";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.pitchanging = this.pitchanging.bind(this);
    this.state = { pit_change: "1" };
    this.arr = Object.keys(myJson);
    this.switch = true;
  }

  pitchanging(e) {
    this.setState({ pit_change: e.target.value });
  }

  render() {
    const pit_change = this.state.pit_change;

    return (
      <Container>
        <Row>
          <Col>
            Pit Selection :
            <Form.Control
              as="select"
              defaultValue={this.arr[0]}
              custom
              onChange={this.pitchanging}
            >
              {this.arr.map((option) => (
                <option value={option}>{option}</option>
              ))}
              {/*} <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
    <option value="5">5</option>*/}
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Card_display pit={pit_change} />
          <Table_display pit={pit_change} />
        </Row>
        <Row className="mt-2" style={{ "overflow-x": "auto" }}>
          <div className="chartWrapper">
            <div className="chartAreaWrapper">
              <Demand_Chart2 pit={pit_change} />
            </div>
          </div>
        </Row>
      </Container>
    );
  }
}

export default Selector;
