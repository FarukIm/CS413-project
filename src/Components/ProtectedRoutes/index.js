import { Route, NavLink } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
	const user = localStorage.getItem("UPSTART_USER");
	const jwt = localStorage.getItem("UPSTART_JWT");

	return user || jwt ? (
		<Route {...rest}>{children}</Route>
	) : (
		<NavLink to='/login' />
	);
};

export default ProtectedRoute;
