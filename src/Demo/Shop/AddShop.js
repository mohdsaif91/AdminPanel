import React, { useState, useRef, useEffect } from "react";

import { Row, Col, Card, Form, Button } from "react-bootstrap";
import GoogleApiWrapper from "../Maps/GoogleMap";
import Draginput from "./Draginput";
import ImageUploader from "react-images-upload";
import FormData from "form-data";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Aux from "../../hoc/_Aux";
import apiRoutes from "../../service/Routes";
import { Resturant } from "../../service";

const initialState = {
  name: "",
  phone: "",
  description: "",
  status: "ACTIVE",
  address: "",
  available: false,
  recommended: false,
  lat: "",
  lng: "",
  logo: "",
  email: "",
  password: "",
  type: "Resturant",
};
const initialAuth = {};
const errorState = {
  email: "",
  contactNumber: "",
  confirmPass: "",
  error: false,
};
const editShopData = {
  editData: [],
};

export default function AddShop(props) {
  const [data, setData] = useState({ ...initialState });
  const [auth, setAuth] = useState({ ...initialAuth });
  const [id, setId] = useState("");
  const [file, setFile] = useState("");
  const [editShop, setEditShop] = useState({});
  const [error, setError] = useState({ ...errorState });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.location.editShopData !== undefined) {
      setData(props.location.editShopData[0]);
    }
  }, []);

  const el = useRef();

  const getData = (e) => {
    if (e.target.name === "logo") {
      setData({
        ...data,
        logo: e.target.files[0],
      });
    } else if (e.target.name === "email") {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const d = re.test(String(e.target.value).toLowerCase());
      if (d) {
        setData({
          ...data,
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
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === "available") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else if (e.target.name === "recommended") {
      setData({
        ...data,
        [e.target.name]: e.target.checked,
      });
    } else if (e.target.name === "status") {
      const status = e.target.options[e.target.selectedIndex].text;
      setData({
        ...data,
        [e.target.name]: status,
      });
    } else if (e.target.name === "type") {
      const type = e.target.options[e.target.selectedIndex].text;
      setData({
        ...data,
        [e.target.name]: type,
      });
    } else if (e.target.name === "confirmPassword") {
      const prePass = data.password;
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

  const getFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      console.log(key, data[key]);
      formData.append(key, data[key]);
    });
    return formData;
  };

  const editDisplayData = () => {
    const formData = getFormData(data);

    Resturant.editResturant(formData).then((response) => {
      if (response.status === 200) {
        toast.success("Edit SucessFull!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.warning("Edit Failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
  };
  const displayData = async (e) => {
    e.preventDefault();
    console.log(data);
    // const formData = new FormData();
    const formData = getFormData(data);

    // formData.append("AuthData", JSON.stringify(auth));
    // formData.append("imageUrlId", id);
    // formData.append("image", file);
    // console.log(data);
    // if (!error.error) {
    //   console.log("no err");
    Resturant.addResturant(formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const shopDataL = props.location.editShopData === undefined ? true : false;
  console.log(data);
  return (
    <Aux>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      {shopDataL ? (
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
                          // value={}
                          placeholder="Enter Name"
                          name="name"
                          onChange={(e) => getData(e)}
                        />
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
                          name="phone"
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
                          <option>ACTIVE</option>
                          <option>INACTIVE</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
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
                      <Form.Group controlId="select">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                          required
                          as="select"
                          name="type"
                          onChange={(e) => getData(e)}
                        >
                          <option>Resturant</option>
                          <option>Home</option>
                        </Form.Control>
                      </Form.Group>
                      <Col md={6}>
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              controlId="everyday"
                              className="align-content-start"
                            >
                              <Form.Label>Available</Form.Label>
                              <Form.Control
                                required
                                type="checkbox"
                                name="available"
                                onChange={(e) => getData(e)}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              controlId="recommended"
                              className="align-content-start"
                            >
                              <Form.Label>Recommended</Form.Label>
                              <Form.Control
                                required
                                type="checkbox"
                                name="recommended"
                                onChange={(e) => getData(e)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                      <Form.Group className="mt-5">
                        <Form.Label>Shop logo</Form.Label>
                        <input
                          required
                          type="file"
                          ref={el}
                          name="logo"
                          onChange={(e) => getData(e)}
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
                    <Col md={6}>
                      <Form.Group controlId="Latitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="lat"
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
                          name="lng"
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row></Row>

                  <Row>
                    <Col md={6}>{/* <GoogleApiWrapper /> */}</Col>
                  </Row>
                  <Row>
                    <Col md={6}></Col>
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
      ) : (
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
                          value={data.name}
                          placeholder="Enter Name"
                          name="name"
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email Address"
                          name="email"
                          value={data.email}
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
                          type="text"
                          placeholder="Enter Contact Details"
                          name="phone"
                          value={data.phone}
                          onChange={(e) => getData(e)}
                        />
                        <div className="row text-danger mt-1 mx-auto">
                          {error.contactNumber}
                        </div>
                      </Form.Group>
                      <Form.Group controlId="select">
                        <Form.Label>Status</Form.Label>
                        <Form.Control
                          required
                          as="select"
                          name="status"
                          value={data.status}
                          onChange={(e) => getData(e)}
                        >
                          <option>ACTIVE</option>
                          <option>INACTIVE</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Description"
                          name="description"
                          value={data.description}
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
                          value={data.address}
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                      <Form.Group controlId="select">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                          required
                          as="select"
                          name="type"
                          value={data.type}
                          onChange={(e) => getData(e)}
                        >
                          <option>Resturant</option>
                          <option>Home</option>
                        </Form.Control>
                      </Form.Group>
                      <Col md={6}>
                        <Row>
                          <Col md={6}>
                            <Form.Group
                              controlId="everyday"
                              className="align-content-start"
                            >
                              <Form.Label>Available</Form.Label>
                              <Form.Control
                                required
                                type="checkbox"
                                name="available"
                                checked={data.available}
                                onChange={(e) => getData(e)}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group
                              controlId="recommended"
                              className="align-content-start"
                            >
                              <Form.Label>Recommended</Form.Label>
                              <Form.Control
                                required
                                type="checkbox"
                                name="recommended"
                                checked={data.recommended}
                                onChange={(e) => getData(e)}
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Col>
                      <Form.Group className="mt-5">
                        <Form.Label>Shop logo</Form.Label>
                        <img className="shopBannerImage" src={data.logo} />
                        <input
                          required
                          type="file"
                          ref={el}
                          name="logo"
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="Latitude">
                        <Form.Label>Latitude</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          name="lat"
                          value={data.lat}
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
                          name="lng"
                          value={data.lng}
                          onChange={(e) => getData(e)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row></Row>

                  <Row>
                    <Col md={6}>{/* <GoogleApiWrapper /> */}</Col>
                  </Row>
                  <Row>
                    <Col md={6}></Col>
                  </Row>
                  <Row className="mt-5">
                    <Col md={6}>
                      <Button
                        type="submit"
                        onClick={editDisplayData}
                        variant="outline-success"
                        className="btn-block"
                      >
                        Edit
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
      )}
    </Aux>
  );
}
