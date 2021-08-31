import React from "react";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Dropdown,
  Badge,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import "../App.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="homeLink">
            Shopping Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search a product"
            className="m-auto"
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FaShoppingCart color="white" fontSize="25px" />
            <Badge>10</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ minWidth: 370 }}>
            <span style={{ padding: 10 }}>Cart is Empty!</span>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
