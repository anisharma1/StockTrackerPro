import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/register" element={<Register />} />
				<Route path="/about" element={<About />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}