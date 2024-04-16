import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Container,
  Form,
  Row,
  Col,
  Accordion,
  Alert,
  Card,
  Carousel,
  Image,
  Tab,
  ListGroup,
  Modal,
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Popover,
  Overlay,
  Pagination,
  Toast,
} from "react-bootstrap";
import CarouselImg from "./components/carousel.jpg";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#form">Form</Nav.Link>
            <Nav.Link href="#accordion">Accordion</Nav.Link>
            <Nav.Link href="#alert">Alert</Nav.Link>
            <Nav.Link href="#modal">Modal</Nav.Link>
            <Nav.Link href="#card">Card</Nav.Link>
            <Nav.Link href="#carousel">Carousel</Nav.Link>
            <NavDropdown title="Products">
              <NavDropdown.Item>Cars</NavDropdown.Item>
              <NavDropdown.Item>Bikes</NavDropdown.Item>
              <NavDropdown.Item>Trucks</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Aeroplane</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              className="me-2"
              type="search"
              placeholder="Search"
              aria-label="search"
            />
            <Button variant="outline-primary">Submit</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const AlertComponent = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" id="alert" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return (
    <Button onClick={() => setShow(true)} className="d-block my-3">
      Show Alert
    </Button>
  );
};

const LoadingButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    function simulateRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateRequest().then(() => {
        setIsLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setIsLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading..." : "Click to load"}
    </Button>
  );
};

const AccordionComponent = () => {
  return (
    <Accordion className="my-3" defaultActiveKey="0" id="accordion">
      <Accordion.Item className="mb-2" eventKey="0">
        <Accordion.Header>This is accordion</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="mb-2" eventKey="1">
        <Accordion.Header>This is accordion</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

const FormComponent = () => {
  return (
    <Form className="mt-5" id="form">
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formControlEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formControlPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Form.Group controlId="formControlAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formControlAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formControlCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="formControlState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} controlId="formControlZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check label="Check me out" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const CardComponent = () => {
  return (
    <Card className="text-center my-3" id="card">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go Somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
};

const CarouselComponent = () => {
  return (
    <Carousel className="my-4" id="carousel">
      <Carousel.Item>
        <Image src={CarouselImg} style={{ width: "100%", height: "500px" }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={CarouselImg} style={{ width: "100%", height: "500px" }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={CarouselImg} style={{ width: "100%", height: "500px" }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const TabComponent = () => {
  return (
    <Tab.Container
      id="list-group-tabs-example"
      className="mb-3"
      defaultActiveKey="#link1"
    >
      <Row>
        <Col>
          <ListGroup>
            <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <Tab.Content>
            <Tab.Pane eventKey="#link1">Tab pane content 1</Tab.Pane>
            <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

const ModalComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Button className="my-3" variant="primary" onClick={handleShow} id="modal">
        Launch Modal
      </Button>

      <Modal className="my-3" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Body</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const OffcanvasComponent = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <>
      <Button variant="primary" className="d-block mb-3" onClick={handleShow}>
        Open Offcanvas
      </Button>

      <Offcanvas onHide={handleHide} show={show} scroll>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const OverlayComponent = () => {
  const [show, setShow] = useState(false);
  const target = useRef();

  return (
    <>
      <Button variant="success" className="mb-3" ref={target} onClick={() => setShow(!show)}>
        Overlay
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        <Popover>
          <Popover.Header>Popover right</Popover.Header>
          <Popover.Body>
            {" "}
            And here's some <strong>amazing</strong> content. It's very
            engaging. right?
          </Popover.Body>
        </Popover>
      </Overlay>
    </>
  );
};

const ToastComponent = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" className="d-block mb-2" onClick={() => setShow(!show)}>Show Toast</Button>
      <Toast show={show} onClose={() => setShow(false)}>
        <Toast.Header>
          <Image src={CarouselImg} height={20} className="rounded me-2" />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </>
  );
}

const PaginationComponent = () => {
  return (
    <Pagination className="flex-row justify-content-center  ">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />
      
      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

const App = () => {
  return (
    <Container fluid="sm">
      <NavbarComponent />
      <FormComponent />
      <AccordionComponent />
      <AlertComponent />
      <LoadingButton />
      <CardComponent />
      <CarouselComponent />
      <TabComponent />
      <ModalComponent />
      <OffcanvasComponent />
      <OverlayComponent />
      <ToastComponent />
      <PaginationComponent />
    </Container>
  );
};

export default App;
