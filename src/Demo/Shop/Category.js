import React from "react";
import Aux from "../../hoc/_Aux";
import ButtonG from "./ButtonG";

import Input from "./Input";
import Draginput from "./Draginput";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import TableI from "./TableI";

export default function Category() {
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
                      ControlId="addcategory"
                      LabelName="Add Category"
                      Type="text"
                      PlaceHolder="Enter Category Name"
                      Required="true"
                    />
                  </Col>
                  <Col md={6}>
                  <Form.Group controlId="addcatimage">
                      <Form.Label>Sub-Category</Form.Label>
                      <Draginput text="image note" />
                    </Form.Group>
                  </Col>
                  <Col md={3} className="mt-2">
                  <ButtonG  Button1="Save"
                      Button2="Cancel"/>

                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>

          <TableI TableName="Category" />
        </Col>
      </Row>
    </Aux>
  );
}
