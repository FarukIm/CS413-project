import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Components/ProtectedRoutes";
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
					{/* <ProtectedRoute path='/'> */}
					<Route path='/' element={<HomeScreen />} />
					{/* </ProtectedRoute> */}
					{/* <ProtectedRoute path='/video'> */}
					<Route path='/video' element={<VideoScreen />} />
					{/* </ProtectedRoute> */}
				</Routes>
			</Router>
		</>
	);
}

export default App;
