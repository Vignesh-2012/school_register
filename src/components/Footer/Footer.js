
import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="http://Vignesh-2012.github.io/school_register">
              Vignesh
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://Vignesh-2012.github.io/school_register">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="http://Vignesh-2012.github.io/school_register">
              Blog
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
