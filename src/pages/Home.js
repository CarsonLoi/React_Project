import { Link } from "react-router-dom";
import React from "react-dom";
import Container from "react-bootstrap/Container";
import Heatmap from "../heatmap/heatmap";
import Heatmap2 from "../heatmap/heatmap2";

const Home = () => {
  return (
    <Container>
      <div>
        <h2> Performance </h2>
        <Heatmap2 />
      </div>
    </Container>
  );
};

export default Home;
