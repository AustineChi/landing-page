import React from "react";
import { Switch, Route } from "react-router-dom";

const SignUp = React.lazy(() => import("./views/SignUp/StepOne"));
const SignUpNext = React.lazy(() => import("./views/SignUp/StepTwo"));
const SignIn = React.lazy(() => import("./views/SignIn"));
const Dashboard = React.lazy(() => import("./views/Dashboard/Landing"));

const loading = (
	<div className="pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse"></div>
	</div>
);

function App() {
	return (
		<Switch>
			<React.Suspense fallback={loading}>
				<Route
					exact
					path="/"
					name="Login Page"
					render={(props) => <SignIn {...props} />}
				/>
				<Route
					exact
					path="/sign-up"
					name="SignUp Page"
					render={(props) => <SignUp {...props} />}
				/>
				<Route
					exact
					path="/sign-up/next"
					name="SignUp Next Page"
					render={(props) => <SignUpNext {...props} />}
				/>
				<Route
					exact
					path="/dashboard"
					name="dashboard"
					render={(props) => <Dashboard {...props} />}
				/>
				{/* <Redirect to="/" key="redirect" /> */}
			</React.Suspense>
		</Switch>
	);
}

export default App;
