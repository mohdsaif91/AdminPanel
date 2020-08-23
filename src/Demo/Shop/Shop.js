import React from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import croma from "../../assets/images/cromaImage.jpg";
import relianceimg from "../../assets/images/reliance.jpg";
import wallMart from "../../assets/images/walmart.jpg";

export default function Shop() {
  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Row>
                <Col>
                  <Card.Title as="h3">Shop List</Card.Title>
                  <Form inline>
                    <Form.Group className="mt-2 mb-2">
                      <Form.Control type="text" placeholder="Search" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <span className="d-block mt-5"></span>
                  <Button>Copy</Button>
                  <Button>CSV</Button>
                  <Button>Excel</Button>
                  <Button>Print</Button>
                  <Button>PDF</Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Shop Name</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Wall Mart</td>
                    <td>
                      <img className="shopBannerImage" src={wallMart} />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          checked="true"
                          id="toggle1"
                          class="button"
                        />
                        <label for="toggle1" class="border">
                          toggle button
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Reliance</td>
                    <td>
                      <img src={relianceimg} className="shopBannerImage" />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          checked="true"
                          id="toggle2"
                          class="button"
                        />
                        <label for="toggle2" class="border">
                          toggle button
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Croma</td>
                    <td>
                      <img src={croma} className="shopBannerImage" />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          checked="true"
                          id="toggle3"
                          class="button"
                        />
                        <label for="toggle3" class="border">
                          toggle button
                        </label>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}
