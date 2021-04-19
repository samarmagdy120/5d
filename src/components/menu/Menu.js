import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Menu.css";

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-black">
      <Navbar.Brand href="#home">
        <img src="images/logo.png" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">المواهب</Nav.Link>
          <Nav.Link href="#link">المكتشفون</Nav.Link>
          <Nav.Link href="#link">المؤلفون</Nav.Link>
          <Nav.Link href="#link">فريق العمل</Nav.Link>
          <Nav.Link href="#link">الاستوديو</Nav.Link>
          <Nav.Link href="#link">التجارب المفتوحة</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;
