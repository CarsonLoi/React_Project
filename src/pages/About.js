import { Link } from "react-router-dom";
import React from "react-dom";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container>
      <div>
        <h2> This is About Page </h2>
        <Link to="/" className="btn">
          back to home
        </Link>
        <br />
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </div>
    </Container>
  );
};

export default About;
