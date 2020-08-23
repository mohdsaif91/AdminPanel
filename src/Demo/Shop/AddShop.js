import React from "react";

import { Row, Col, Card, Form, Button } from "react-bootstrap";
import GoogleApiWrapper from "../../Demo/Maps/GoogleMap/";
import Draginput from "./Draginput";

import Aux from "../../hoc/_Aux";

export default function AddShop() {
  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Shop Details</Card.Title>
            </Card.Header>

            <Card.Body>
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        required="true"
                      />
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                      />
                    </Form.Group>
                    <Form.Group controlId="contact">
                      <Form.Label>Contact Details</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Contact Details"
                      />
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="cpassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="select">
                      <Form.Label>Status</Form.Label>
                      <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="min-ammount">
                      <Form.Label>Min Amount</Form.Label>
                      <Form.Control
                        type="type"
                        placeholder="Enter Min Amount"
                      />
                    </Form.Group>
                    <Form.Group controlId="off-percenatge">
                      <Form.Label>Offer Percentage</Form.Label>
                      <Form.Control
                        type="type"
                        placeholder="Enter Min Amount for Offer"
                      />
                    </Form.Group>
                    <Form.Group controlId="est-delivery time">
                      <Form.Label>Estimated delivery time(Minutes)</Form.Label>
                      <Form.Control
                        type="type"
                        placeholder="Enter Max Delivery Time"
                      />
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="location">
                      <Form.Label>Location</Form.Label>
                      <Form.Control type="text" placeholder="Location" />
                    </Form.Group>
                    <Form.Group controlId="Address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md="4">
                        <Form.Group
                          controlId="everyday"
                          className="align-content-start"
                        >
                          <Form.Label>Every day</Form.Label>
                          <Form.Control type="checkbox" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="shopopen">
                          <Form.Label>Shop Open</Form.Label>
                          <Form.Control type="time" />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="shopclose">
                          <Form.Label>Shop Close</Form.Label>
                          <Form.Control type="time" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="auto">
                        <Form.Group>
                          <Form.Label>Shop logo</Form.Label>
                          <Draginput />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>

                  <Col md={6}>
                    <GoogleApiWrapper />
                  </Col>
                </Row>
                <Row className="mt-5">
                  <Col md={6}>
                    <Button variant="outline-success" className="btn-block">
                      Save
                    </Button>
                  </Col>
                  <Col md={6}>
                    <Button variant="outline-danger" className="btn-block">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}
