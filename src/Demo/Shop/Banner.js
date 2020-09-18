import React from "react";
import Aux from "../../hoc/_Aux";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import Draginput from "./Draginput";
import Input from "./Input";
import InputC from "./InputC";
import ButtonG from "./ButtonG";
import TableI from "./TableI";

export default function Banner() {
  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Row>
                  <Col md={4}>
                    <Input
                      ControlId="banner"
                      LabelName="Banner Name"
                      Type="text"
                      PlaceHolder="Enter Banner Name"
                      Required="true"
                    />
                  </Col>
                  <Col md={4}>
                    <InputC ControlId="category" LabelName="Category" />
                  </Col>
                  <Col md={4}>
                    <InputC ControlId="subcategory" LabelName="Sub-Category" />
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="bannerimage">
                      <Form.Label>Banner</Form.Label>
                      <Draginput text="image note" />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4} className="mt-2">
                    <ButtonG Button1="Save"
                      Button2="Cancel"
                    />
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
          <TableI TableName="Banner"

          />
        </Col>
      </Row>
    </Aux>
  );
}
