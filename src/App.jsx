import React, { useEffect, useState } from "react";
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
} from "react-bootstrap";
import CarouselImg from "./components/carousel.jpg";

const AlertComponent = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
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
    <Accordion className="my-3" defaultActiveKey="0">
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
    <Form className="mt-5">
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
    <Card className="text-center my-3">
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
    <Carousel className="my-4">
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

const ModalComponent = (props) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Button className="my-3" variant="primary" onClick={handleShow}>
                Launch Modal
            </Button>

            <Modal className="my-3" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Modal Body</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

const App = () => {
  return (
    <Container fluid="sm">
      <FormComponent />
      <AccordionComponent />
      <AlertComponent />
      <LoadingButton />
      <CardComponent />
      <CarouselComponent />
      <TabComponent />
      <ModalComponent />
    </Container>
  );
};

export default App;
