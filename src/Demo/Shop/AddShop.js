import React, { useState, useRef } from "react";

import { Row, Col, Card, Form, Button } from "react-bootstrap";
import GoogleApiWrapper from "../Maps/GoogleMap";
import Draginput from "./Draginput";
import ImageUploader from "react-images-upload";
import FormData from "form-data";
import { v4 as uuid } from "uuid";

import Aux from "../../hoc/_Aux";
import apiRoutes from "../../service/Routes";
import { Resturant } from "../../service";

const initialState = {
  name: "",
  minAmount: 0,
  offerPercentage: 0,
  contactDetials: "",
  estimatedDeliveryTime: "",
  description: "",
  location: "",
  status: 1,
  address: "",
  everyDay: false,
  openTime: "",
  closeTime: "",
  latitude: "",
  longitude: "",
  imageUrlId: "",
};
const initialAuth = {
  email: "",
  password: "",
};
const errorState = {
  email: "",
  contactNumber: "",
  confirmPass: "",
  error: false,
};

export default function AddShop() {
  const [data, setData] = useState({ ...initialState });
  const [auth, setAuth] = useState({ ...initialAuth });
  const [id, setId] = useState("");
  const [file, setFile] = useState("");
  const [error, setError] = useState({ ...errorState });
  const el = useRef();

  const getData = (e) => {
    if (e.target.name === "email") {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const d = re.test(String(e.target.value).toLowerCase());
      if (d) {
        setAuth({
          ...auth,
          [e.target.name]: e.target.value,
        });
        setError({
          email: "",
          error: false,
        });
      } else {
        setError({
          email: "email is not valid",
          error: true,
        });
      }
    } else if (e.target.name === "password") {
      setAuth({
        ...auth,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "everyDay") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else if (e.target.name === "confirmPassword") {
      const prePass = auth.password;
      const newPass = e.target.value;
      if (prePass !== newPass) {
        setError({
          confirmPass: "Password does not match",
          error: true,
        });
      } else {
        setError({
          confirmPass: "",
          error: false,
        });
      }
    } else if (e.target.name === "contactDetials") {
      const phoneRegex = /^(?:\+?\d{2}[ -]?\d{3}[ -]?\d{5}|\d{4})$/;
      const d = phoneRegex.test(e.target.value);
      if (d) {
        setError({
          contactNumber: "",
          error: false,
        });
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      } else {
        setError({
          contactNumber: "Number is not valid",
          error: true,
        });
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };
  const singleFileChangedHandler = (e) => {
    const file = e.target.files[0];
    const imageName = file.name.split(".");
    const imageUrlId = `${uuid()}.${imageName[1]}`;
    setId(imageUrlId);
    setData({
      ...data,
      imageUrlId: imageUrlId,
    });
    setFile(file);
  };
  const displayData = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ResturantData", JSON.stringify(data));
    formData.append("AuthData", JSON.stringify(auth));
    formData.append("imageUrlId", id);
    formData.append("image", file);
    console.log(data);
    if (!error.error) {
      console.log("no err");
      Resturant.addResturant(formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("yes error<>");
    }
  };

  return (
    <Aux>
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Shop Details</Card.Title>
            </Card.Header>

            <Card.Body>
              <Form onSubmit={displayData}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="Name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Name"
                        name="name"
                        onChange={(e) => getData(e)}
                        // {...formik.getFieldProps("name")}
                      />
                      {/* {formik.errors.name && formik.touched.name ? (
                        <div className="row text-danger mt-1 mx-auto">
                          {formik.errors.name}
                        </div>
                      ) : null} */}
                    </Form.Group>
                    <Form.Group controlId="email">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter Email Address"
                        name="email"
                        required
                        onChange={(e) => getData(e)}
                      />

                      <div className="row text-danger mt-1 mx-auto">
                        {error.email}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="contact">
                      <Form.Label>Contact Details</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter Contact Details"
                        name="contactDetials"
                        onChange={(e) => getData(e)}
                      />
                      <div className="row text-danger mt-1 mx-auto">
                        {error.contactNumber}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="cpassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Password"
                        name="confirmPassword"
                        onChange={(e) => getData(e)}
                      />

                      <div className="row text-danger mt-1 mx-auto">
                        {error.confirmPass}
                      </div>
                    </Form.Group>
                    <Form.Group controlId="select">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        required
                        as="select"
                        name="status"
                        onChange={(e) => getData(e)}
                      >
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
                        required
                        type="type"
                        placeholder="Enter Min Amount"
                        name="minAmount"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="off-percenatge">
                      <Form.Label>Offer Percentage</Form.Label>
                      <Form.Control
                        required
                        type="type"
                        placeholder="Enter Min Amount for Offer"
                        name="offerPercentage"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="est-delivery time">
                      <Form.Label>Estimated delivery time(Minutes)</Form.Label>
                      <Form.Control
                        required
                        type="type"
                        placeholder="Enter Max Delivery Time"
                        name="estimatedDeliveryTime"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="description">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Description"
                        name="description"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="location">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Location"
                        name="location"
                        onChange={(e) => getData(e)}
                      />
                    </Form.Group>
                    <Form.Group controlId="Address">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows="3"
                        name="address"
                        onChange={(e) => getData(e)}
                      />
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
                          <Form.Control
                            required
                            type="checkbox"
                            name="everyDay"
                            onChange={(e) => getData(e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="shopopen">
                          <Form.Label>Shop Open</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="openTime"
                            placeholder="9:00"
                            onChange={(e) => getData(e)}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group controlId="shopclose">
                          <Form.Label>Shop Close</Form.Label>
                          <Form.Control
                            required
                            type="text"
                            name="closeTime"
                            placeholder="18:00"
                            onChange={(e) => getData(e)}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="auto">
                        <Form.Group>
                          <Form.Label>Shop logo</Form.Label>
                          <input
                            required
                            type="file"
                            ref={el}
                            name="file"
                            onChange={(e) => singleFileChangedHandler(e)}
                          />
                          {/* <ImageUploader
                            withIcon={true}
                            withPreview={true}
                            buttonText="Choose images"
                            // onChange={onDrop}
                            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                            maxFileSize={5242880}
                          /> */}
                          {/* <Draginput onChange={(e) => getImages(e)} /> */}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>{/* <GoogleApiWrapper /> */}</Col>
                </Row>
                <Row>
                  <Col md={6}></Col>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId="Latitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="latitude"
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="Longitude">
                        <Form.Label>Longitude</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="longitude"
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Row>
                <Row className="mt-5">
                  <Col md={6}>
                    <Button
                      type="submit"
                      // onClick={displayData}
                      variant="outline-success"
                      className="btn-block"
                    >
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
