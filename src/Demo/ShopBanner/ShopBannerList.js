import React from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";

import Aux from "../../hoc/_Aux";
import macain from "../../assets/images/food1.jpg";
import Cerelac from "../../assets/images/food2.jpg";
import FunFood from "../../assets/images/food3.jpg";

export const ShopBannerList = () => {
  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h3">Shop Banner List</Card.Title>
              <span className="d-block m-t-5"></span>
              <Button>Copy</Button>
              <Button>CSV</Button>
              <Button>Excel</Button>
              <Button>Print</Button>
              <Button>PDF</Button>
              <Col>
                <Form inline>
                  <Form.Group className="mt-2 mb-2">
                    <Form.Control type="text" placeholder="Search" />
                  </Form.Group>
                </Form>
              </Col>
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
                    <td>Fun Food veg Mayonnaise</td>
                    <td>
                      <img className="shopBannerImage" src={FunFood} />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          id="toggle1"
                          checked="true"
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
                    <td>Cerelac Wheat Apple</td>
                    <td>
                      <img src={Cerelac} className="shopBannerImage" />
                    </td>
                    <td>Active</td>
                    <td>
                      <div class="toggle-switch blue">
                        <input
                          type="checkbox"
                          id="toggle2"
                          checked="true"
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
                    <td>Macain French fries</td>
                    <td>
                      <img src={macain} className="shopBannerImage" />
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
                          ON
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
};
export default ShopBannerList;
