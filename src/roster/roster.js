import React from "react";
import "../styles.css";
import DatePicker from "react-datepicker";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import "react-datepicker/dist/react-datepicker.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const selectOptions = {
  0: "Closed",
  1: "Opening"
};

const defaultSorted = [
  {
    dataField: "Table",
    order: "asec"
  }
];

const data = [
  {
    Table: "NB0001",
    Pit: "1",
    StartTime: "07:00",
    EndTime: "07:00",
    Duration: "24",
    Status: selectOptions[1]
  },
  {
    Table: "NB0002",
    Pit: "2",
    StartTime: "15:00",
    EndTime: "07:00",
    Duration: "16",
    Status: selectOptions[0]
  },
  {
    Table: "NB0003",
    Pit: "3",
    StartTime: "15:00",
    EndTime: "07:00",
    Duration: "16",
    Status: selectOptions[0]
  },
  {
    Table: "NB0004",
    Pit: "5",
    StartTime: "11:00",
    EndTime: "03:00",
    Duration: "16",
    Status: selectOptions[1]
  },
  {
    Table: "NB0005",
    Pit: "5",
    StartTime: "11:00",
    EndTime: "03:00",
    Duration: "16",
    Status: selectOptions[1]
  },
  {
    Table: "NB0010",
    Pit: "6",
    StartTime: "12:00",
    EndTime: "04:00",
    Duration: "16",
    Status: selectOptions[0]
  },
  {
    Table: "NB0014",
    Pit: "6",
    StartTime: "12:00",
    EndTime: "04:00",
    Duration: "16",
    Status: selectOptions[0]
  },
  {
    Table: "NB0017",
    Pit: "6",
    StartTime: "12:00",
    EndTime: "04:00",
    Duration: "16",
    Status: selectOptions[0]
  }
];

const columns = [
  {
    dataField: "Table",
    text: "Table",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "Pit",
    text: "Pit",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "StartTime",
    text: "StartTime",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "EndTime",
    text: "EndTime",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "Duration",
    text: "Duration",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    })
  },
  {
    dataField: "Status",
    text: "Status",
    sort: true,
    filter: textFilter({
      placeholder: "Search"
    }),
    classes: function callback(cell) {
      return cell;
    }
  }
];

class RosterTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleClick() {
    this.setState((state) => ({
      //set the state for icons
    }));
    console.log(this.state);
  }

  render() {
    return (
      <Container>
        <div className="App">
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />

          <BootstrapTable
            classes="customBootStrapClasses"
            bordered={true}
            bootstrap4={true}
            hover={true}
            keyField="Table"
            data={data}
            columns={columns}
            defaultSorted={defaultSorted}
            filter={filterFactory()}
          />
        </div>
      </Container>
    );
  }
}

export default RosterTable;
