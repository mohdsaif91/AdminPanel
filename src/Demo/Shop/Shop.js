import React, { useEffect, useState } from "react";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
import { Resturant } from "../../service";

import Aux from "../../hoc/_Aux";

export default function Shop(props) {
  const [resturant, setResturant] = useState([]);
  const [serach, setSearch] = useState("");
  const [filteredCountries, setFilteredResturant] = useState([]);

  useEffect(() => {
    Resturant.getResturant().then((res) => {
      setResturant(res.data);
    });
  }, []);

  useEffect(() => {
    setFilteredResturant(
      resturant.filter((f) => {
        if (f.name.toLowerCase().includes(serach.toLowerCase)) console.log(f);
        return f;
      })
    );
  }, [serach, resturant]);

  const handleSwitch = (elem, state) => {
    console.log(state);
  };

  const searchRestHom = (e) => {
    setSearch(e.target.value);
    // const filteredData = shop.data.filter((f) => {
    //   if (f.name.includes(e.target.value)) {
    //     return f;
    //   }
    // });
    // console.log(filteredData);
    // setShop(filteredData);
  };
  const changeStatus = () => {};
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
                {/* <Col>
									<span className="d-block mt-5"></span>
									<Button>Copy</Button>
									<Button>CSV</Button>
									<Button>Excel</Button>
									<Button>Print</Button>
									<Button>PDF</Button>
								</Col> */}
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
                  {filteredCountries.map((m) => (
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
                            type="radio"
                            isChecked={m.status === "ACTIVE" ? true : false}
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
