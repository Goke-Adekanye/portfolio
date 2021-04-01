/* eslint-disable eqeqeq */
import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./styles/header.css";
import CustomButton from "../button";
import resumeData from "../../utils/resumeData";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { HomeRounded, Telegram } from "@material-ui/icons";

function Header(props) {
  const pathname = props?.location?.pathname;

  return (
    <Navbar sticky="top" expand="lg" className="header">
      {/* HOME ICON */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>{" "}
      </Nav.Link>

      {/* NAV ROUTES */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathname == "/" ? "header_link_active" : "header_link"}
          >
            RESUME
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathname == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>

        {/* SOCIAL ICONS */}
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            // eslint-disable-next-line react/jsx-no-target-blank
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}

          {/* eslint-disable-next-line react/jsx-no-target-blank*/}
          <a
            href="https://wa.me/2348068350106"
            target="_blank"
            rel="nonreferrer"
          >
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withRouter(Header);
