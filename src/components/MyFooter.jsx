import React from "react";
import { Col, Row } from "react-bootstrap";
import { Facebook_logo, Insta_logo, Linkin_logo, Twitter_logo } from "./Helper";

const MyFooter = () => {
  return (
    <>
      <section className="py-5">
        <div className="custom_container">
          <Row>
            <Col lg={7}>
              <div>
                <a
                  href="#"
                  className="fw-medium ff_overpass text-white fs_2x4l"
                >
                  Logo
                </a>
                <p className="fw-normal ff_overpass fs_1x4l color_gray9a w_457 mb-0 pt-2 mt-1">
                  We ara a lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat... <span className="text-danger cursor_pointer">Read More</span>
                </p>
                <div>
                  <div className="d-flex align-items-center gap-2 pt-4 mt-3">
                      <a href="#" className="app_icon_circel d-flex align-items-center justify-content-center">
                          <Facebook_logo/>
                      </a>
                      <a href="#" className="app_icon_circel d-flex align-items-center justify-content-center">
                          <Insta_logo/>
                      </a>
                      <a href="#" className="app_icon_circel d-flex align-items-center justify-content-center">
                          <Twitter_logo/>
                      </a>
                      <a href="#" className="app_icon_circel d-flex align-items-center justify-content-center">
                          <Linkin_logo/>
                      </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MyFooter;
