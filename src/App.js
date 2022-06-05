import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import LogIn from "./Pages/LogIn/LogIn";
import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import VideoScreen from "./Pages/VideoScreen/VideoScreen";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/login' element={<LogIn />} />

					<Route path='/video' element={<VideoScreen />} />

					<Route exact path='/' element={<HomeScreen />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
