import React from "react";
import "./heatmap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ReactComponent as Logo } from "./heatmap.svg";

const Heatmap2 = () => {
  return (
    <Row>
      <TransformWrapper
        defaultScale={1.2}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({
          zoomIn,
          zoomOut,
          resetTransform,
          positionX,
          positionY,
          ...rest
        }) => (
          <TransformComponent>
            <Col class="border border-dark">
              <div className="mapWrapper">
                <div className="App svg-container mapAreaWrapper">
                  <Logo />
                </div>
              </div>
            </Col>
          </TransformComponent>
        )}
      </TransformWrapper>
    </Row>
  );
};
export default Heatmap2;
