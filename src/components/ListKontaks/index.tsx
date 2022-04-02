import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, getListKontak, detailKontak } from "../../actions/kontakAction";

export default function ListKontaks() {
	const {
		getListKontakResult,
		getListKontakLoading,
		getListKontakError,
		deleteKontakResult,
	} = useSelector((state: any) => state.KontakReducer);

	const dispatch = useDispatch();
	useEffect(() => {
		//getAPI
		dispatch(getListKontak());
	}, [dispatch]);

	const handleDelete = (id: number) => {
		console.log("1. tombol delete");

		dispatch(deleteKontak(id));
	};

	useEffect(() => {
		if (deleteKontakResult) {
			console.log("5. did update");

			dispatch(getListKontak());
		}
	}, [deleteKontakResult, dispatch]);

	return (
		<div>
			<h4>List Kontak</h4>
			{getListKontakResult <= 0 ? (
				<p>Data Kosong</p>
			) : (
				<>
					{getListKontakResult ? (
						getListKontakResult.map((kontak: any) => {
							return (
								<p key={kontak.id}>
									{kontak.nama} - {kontak.noHp} --{" "}
									<button onClick={() => handleDelete(kontak.id)}>
										Delete
									</button>
                                    <button 
                                    onClick={() => dispatch(detailKontak(kontak))}
                                    >
										Edit
									</button>
								</p>
							);
						})
					) : getListKontakLoading ? (
						<p>loading....</p>
					) : (
						<p>{getListKontakError ? getListKontakError : ""}</p>
					)}
				</>
			)}
		</div>
	);
}
