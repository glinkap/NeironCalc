import * as actionTypes from '../constants/actionTypes';
export const fetchData = function (url) {
	return fetch('http://neiron-calc.ru/api/dataset/2/histogram')
		// .then(handleErrors)
		.then((response) => response.json())
		.then(json => {
			console.log("json", json);
			
		});
		// .then((req) => {
		// 	console.log(req);
		// });
}; 


// fetch(url)
//         .then((response) => {
//             if (!response.ok) {
//                 throw Error(response.statusText);
//             }

//             // this.setState({ isLoading: false });

//             return response;
//         })
//         .then((response) => response.json())
//         .then((items) => this.setState({ items })) // ES6 property value shorthand for { items: items }
//         .catch(() => this.setState({ hasErrored: true }));