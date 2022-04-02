import { AddKontak, ListKontaks } from "./components";

function App() {
	return (
		<div style={{ padding: "30px" }}>
			<h1>Aplikasi Kontak</h1>
			<hr />
			<AddKontak />
			<hr />
			<ListKontaks />
		</div>
	);
}

export default App;
