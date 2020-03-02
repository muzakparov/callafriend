import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import Clock from "react-live-clock";

function NavBar() {
  return (
    <Navbar bg="light"  sticky="top" expand>
      <Navbar.Brand>
        <Link to={`/`} className="brand">
          <FontAwesomeIcon icon={faPhoneAlt} /> Call a Friend{" "}
        </Link>
      </Navbar.Brand>
      <Nav>
        <Link to={`/`} className="brand text-center">
          Home
        </Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-3">
          <Clock format={"HH:mm:ss"} ticking={true} />
        </Nav>
        <Nav>
          <OverlayTrigger
            placement={"bottom"}
            overlay={
              <Tooltip id={`tooltip-${"add-friend"}`}>
                <strong>{"add a friend"}</strong>
              </Tooltip>
            }
          >
            <Link to={`/add`} className="add-page-btn">
              <FontAwesomeIcon icon={faPlus} size="lg" />
            </Link>
          </OverlayTrigger>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
