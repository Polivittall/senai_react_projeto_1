
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><div className='Logo'><h1>BIBLIOTECH</h1></div></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Livros">Livros</Nav.Link>
            <Nav.Link href="/Filmes">Filmes</Nav.Link>
            
            
          </Nav>
          <Form className="d-flex col-sm-12 col-md-6 col-lg-6">
            <Nav.Link href="/Login">LOGIN</Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;