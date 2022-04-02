import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, getListKontak, updateKontak } from "../../actions/kontakAction";

interface Kontak {
	// id? : number,
	nama: string;
	noHp: string;
}

export default function AddKontak() {
	const dispatch = useDispatch();
	const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector(
		(state: any) => state.KontakReducer
	);
	const [form, setFrom] = useState<Kontak>({
		nama: "",
		noHp: "",
	});

	const [id, setId] = useState(null);
    console.log(id);
    

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFrom({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        console.log(id);
        

		if (id !== null) {
			dispatch(updateKontak(id, form));
            setFrom({
				...form,
				nama: "",
				noHp: "",
			});
            setId(null)
		} else {
			dispatch(addKontak(form));
			setFrom({
				...form,
				nama: "",
				noHp: "",
			});
		}
	};

	useEffect(() => {
		if (addKontakResult) {
			dispatch(getListKontak());
		}
	}, [addKontakResult, dispatch]);

	useEffect(() => {
		if(detailKontakResult) {
			setFrom({
				...form,
				nama: detailKontakResult.nama,
				noHp: detailKontakResult.noHp,
			});
			setId(detailKontakResult.id);
		}
	}, [detailKontakResult, dispatch]);

    useEffect(() => {
		if(updateKontakResult) {
            console.log(updateKontakResult);
            
			dispatch(getListKontak());
            
		}
	}, [updateKontakResult, dispatch]);

	return (
		<div>
			<h4>{id ?"Edit Kontak" : "Add Kontak"}</h4>
			<form onSubmit={(e) => handleSubmit(e)}>
				<input
					type="text"
					name="nama"
					placeholder="Name ..."
					value={form.nama}
					onChange={handleOnChange}
				/>
				<input
					type="text"
					name="noHp"
					placeholder="No.Hp ..."
					value={form.noHp}
					onChange={handleOnChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}
