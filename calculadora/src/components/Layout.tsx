import { FunctionComponent } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface LayoutProps {}

const Layout: FunctionComponent<LayoutProps> = () => {
  return (
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="#home">Nome Azienda</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Calcola</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Layout;
