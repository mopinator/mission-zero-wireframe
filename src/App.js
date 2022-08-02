import "./App.css";
import Cards from "./components/cards/cards";
import Navbar from "./components/navbar/navbar";
import SearchBar from "./components/search-bar/search-bar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<SearchBar />
			<Cards />
		</div>
	);
}

export default App;
