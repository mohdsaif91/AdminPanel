import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Form, Button, Table } from 'react-bootstrap';
import { Resturant } from '../../service';

import Aux from '../../hoc/_Aux';
import croma from '../../assets/images/cromaImage.jpg';
import relianceimg from '../../assets/images/reliance.jpg';
import wallMart from '../../assets/images/walmart.jpg';

const initialData = {
	data: [],
};

export default function Shop() {
	const [shop, setShop] = useState({ ...initialData });
	useEffect(() => {
		Resturant.getResturant().then((res) => {
			console.log(res.data);
			const resData = res.data;
			setShop({
				data: resData,
			});
		});
	}, []);

	const searchRestHom = (e) => {
		const filteredData = shop.data.filter((f) => {
			if (e.target.value === f.name) {
				console.log(f);
			}
		});
		setShop(filteredData);
	};
	const changeStatus = () => {};

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
									{shop.data.map((m) => (
										<tr key={m.id}>
											<th scope="row">{m.id}</th>
											<td>{m.name}</td>
											<td>
												<img className="shopBannerImage" src={m.logo} />
											</td>
											<td>{m.status}</td>
											<td>
												<div className="toggle-switch blue">
													<input
														type="checkbox"
														checked={true}
														id="toggle1"
														className="button"
														onChange={changeStatus}
													/>
													<label htmlFor="toggle1" className="border">
														toggle button
													</label>
												</div>
											</td>
											<td>{m.type}</td>
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
