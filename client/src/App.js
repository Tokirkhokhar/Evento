import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import ListedEvents from "./components/listedEvents/ListedEvents";
import AddnewEvent from "./components/AddnewEvent";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			<Route path="/addevent" exact element={<AddnewEvent />} />
			{user && <Route path="/" exact element={<ListedEvents/>} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
