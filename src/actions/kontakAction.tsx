import axios from "axios";

interface Kontak {
    // id?: number;
	nama: string;
	noHp: string;
}

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";


export const getListKontak = () => {
	return (dispatch: any) => {
		// loading

		dispatch({
			type: GET_LIST_KONTAK,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});

		axios({
			method: "GET",
			url: "http://localhost:3000/kontaks",
			timeout: 120000,
		})
			.then((response) => {
				//berhasil get APi

				dispatch({
					type: GET_LIST_KONTAK,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				//gagal get APi

				dispatch({
					type: GET_LIST_KONTAK,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
export const addKontak = (data: Kontak) => {
	return (dispatch: any) => {
		// loading

		dispatch({
			type: ADD_KONTAK,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});

		axios({
			method: "POST",
			url: "http://localhost:3000/kontaks",
			timeout: 120000,
			data: data,
		})
			.then((response) => {
				//berhasil get APi
				dispatch({
					type: ADD_KONTAK,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				//gagal get APi

				dispatch({
					type: ADD_KONTAK,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
export const deleteKontak = (id: number) => {


	return (dispatch: any) => {
		// loading

		dispatch({
			type: DELETE_KONTAK,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});

		axios({
			method: "DELETE",
			url: `http://localhost:3000/kontaks/${id}`,
			timeout: 120000,
		})
			.then((response) => {
				//berhasil get APi

				dispatch({
					type: DELETE_KONTAK,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				//gagal get APi

				dispatch({
					type: DELETE_KONTAK,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
export const detailKontak = (data: Kontak) => {
	console.log("2. Masuk Action");

	return (dispatch: any) => {
		// loading

		dispatch({
			type: DETAIL_KONTAK,
			payload: {
				data,
			},
		});

		
	};
};
export const updateKontak = (id: number, data: Kontak) => {
	return (dispatch: any) => {
		// loading

		dispatch({
			type: UPDATE_KONTAK,
			payload: {
				loading: true,
				data: false,
				errorMessage: false,
			},
		});

		axios({
			method: "PUT",
			url: `http://localhost:3000/kontaks/${id}`,
			timeout: 120000,
			data: data,
		})
			.then((response) => {
				//berhasil get APi
                console.log("berhasil update");
                
				dispatch({
					type: UPDATE_KONTAK,
					payload: {
						loading: false,
						data: response.data,
						errorMessage: false,
					},
				});
			})
			.catch((error) => {
				//gagal get APi

				dispatch({
					type: UPDATE_KONTAK,
					payload: {
						loading: false,
						data: false,
						errorMessage: error.message,
					},
				});
			});
	};
};
