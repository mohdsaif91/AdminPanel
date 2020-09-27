import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Resturant } from "../../service";

import Aux from "../../hoc/_Aux";

const initialData = {};

export default function Shop(props) {
  const [shop, setShop] = useState([]);
  useEffect(() => {
    Resturant.getResturant().then((res) => {
      const resData = res.data;
      setShop(resData);
    });
  }, []);

  const handleSwitch = (elem, state) => {
    console.log(state);
  };

  const searchRestHom = (e) => {
    const filteredData = shop.filter((f) => {
      if (e.target.value === f.name) {
        // console.log(f);
      }
    });
    // setShop(filteredData);
  };
  const changeStatus = (index, e) => {
    let newArray = [...shop];
    if (e.target.checked) {
      Resturant.updateResturantStatus(e.target.id).then((res) => {
        console.log(res);
        newArray[index]["status"] = "ACTIVE";
      });
    } else {
      Resturant.updateResturantStatus(parseInt(e.target.id)).then((res) => {
        console.log(res);
        newArray[index]["status"] = "INACTIVE";
      });
    }

    setShop(newArray);
    // shop.map((m) => {
    //   if (parseInt(e.target.id) === m.id) {
    //     console.log(m);
    //     if (e.target.checked) {
    //       setShop({ status: "ACTIVE" });
    //     } else {
    //       setShop({ status: "INACTIVE" });
    //     }
    //   }
    // });
    console.log(shop);
  };
  const goToAddShop = (e) => {
    const data = shop.filter((f) => {
      if (f.id === parseInt(e.target.id)) {
        return f;
      }
    });
    props.history.push({
      pathname: "/addShop",
      editShopData: data,
    });
  };

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
                      <Form.Control
                        type="text"
                        onChange={(e) => searchRestHom(e)}
                        placeholder="Search"
                      />
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
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  {shop.map((m, index) => (
                    <tr key={m.id}>
                      <th scope="row">{m.id}</th>
                      <td>{m.name}</td>
                      <td>
                        <img className="shopBannerImage" src={m.logo} />
                      </td>
                      <td>{m.status}</td>
                      <td>
                        <label className="switch">
                          {/* {...formik.getFieldProps('checkbox') */}
                          {/* m.status==='ACTIVE'?true:false */}
                          <input
                            id={m.id}
                            type="checkbox"
                            checked={m.status === "ACTIVE" ? true : false}
                            onChange={(e) => changeStatus(index, e)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td>{m.type}</td>
                      <td>
                        <Button
                          id={m.id}
                          variant="danger"
                          onClick={(e) => goToAddShop(e)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
}
