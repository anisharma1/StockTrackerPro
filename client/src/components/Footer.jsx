import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-slate-200 shadow-md fixed bottom-0 w-full">
			<div className="flex flex-col justify-center items-center max-w-6xl mx-auto p-3">
				<Link to="/">
					<h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
						<span className="text-slate-500">StockTracker</span>
						<span className="text-slate-700 ml-1">Pro</span>
					</h1>
				</Link>
				<p className="text-black text-xs p-2">Made with ♥️ </p>
			</div>
		</footer>
	);
}
