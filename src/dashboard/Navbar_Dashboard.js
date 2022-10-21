import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Footer from "../pages/Footer";
import Selector from "../testing/parent";
import RosterTable from "../roster/roster";

function NavigateBar() {
  return (
    <Router>
      <div className="page-container">
        <div>
          <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  Dashboard Demo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                      Overview
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about">
                      Roster
                    </Nav.Link>
                    <Nav.Link as={Link} to="/recommendation">
                      Recommendation
                    </Nav.Link>
                    <NavDropdown title="Others" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">
                        Others
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">
                        Something
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">
                        Separated link
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                      Login
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </>
        </div>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<RosterTable />} />
            <Route path="recommendation" element={<Selector />} />
          </Routes>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default NavigateBar;
