import routes from '../Routes';
import axiosCall from '../../util/AxiosCall';

function addResturant(addRest) {
	const url = `${routes.resturant.addResturant}`;
	console.log(url);
	const method = 'POST';
	const body = addRest;
	return axiosCall(url, method, body);
}

function getResturant() {
	const url = `${routes.resturant.getResturant}`;
	const method = 'GET';
	return axiosCall(url, method, null);
}

export const Resturant = {
	addResturant,
	getResturant,
};
