/*!

Sankara Veda Adhyayanam
*/
import React from "react";

// reactstrap components

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Hero from "./IndexSections/Hero.js";

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <Hero />
            {/* 
              <Buttons />
              <Inputs />
              <section className="section">
                <Container>
                  <CustomControls />
                  <Menus />
                </Container>
              </section>
              <Navbars />
              <section className="section section-components">
                <Container>
                  <Tabs />
                  <Row className="row-grid justify-content-between align-items-center mt-lg">
                    <Progress />
                    <Pagination />
                  </Row>
                  <Row className="row-grid justify-content-between">
                    <Pills />
                    <Labels />
                  </Row>
                  <Alerts />
                  <Typography />
                  <Modals />
                  <Datepicker />
                  <TooltipPopover />
                </Container>
              </section>
              <Carousel />
              <Icons />
              <Login />
              <Download />
            */}
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
