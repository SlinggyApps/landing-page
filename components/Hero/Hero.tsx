import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="section position-relative" id="home">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                One-stop solution for your ecommerce burden
              </p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">
                Delivering next generation
                <span className="text-primary font-weight-medium">
                  {" "}
                  apps and plugins
                </span>
              </h1>
              <p className="text-muted mb-4 pb-2">
                Crafted with expertise, and design we strive to create best and
                useful for different ecommerce platforms{" "}
                <span className="text-primary font-weight-medium">
                  Shopify, Woocomerce
                </span>
              </p>
              <Link href="#features" className="btn btn-warning" scroll={false}>
                Find Out How <span className="ml-2 right-icon">&#8594;</span>
              </Link>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <Image
                src="/images/Group Members.png"
                alt=""
                className="img-fluid mx-auto d-block"
                width={600}
                height={600}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Hero;
