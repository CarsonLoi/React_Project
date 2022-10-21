import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import tableJson from "../pages/data/table.json";
import "../styles.css";

function Table_display(props) {
  const data = tableJson[props.pit];

  return (
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
          {data.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.price}</td>
                <td>{value.current}</td>
                <td>{value.proposed}</td>
                <td className={`${value.var < 0 ? "disabled" : ""}`}>
                  {value.var}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Col>
  );
}

export default Table_display;
