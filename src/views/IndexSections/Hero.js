/*!

Sankara Veda Adhyayanam
*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0 main-hero-image">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/shankara/main.jpg")}
                      style={{ width: "800px" }}
                    />
                    <p className="lead text-white ntr-font">
                    <div>సదాశివ సమారంభాం - శంకరాచార్య మధ్యమాం</div>
                    <div>అస్మదాచార్య పర్యంతాం - వందే గురు పరంపరాం</div>
                    </p>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
