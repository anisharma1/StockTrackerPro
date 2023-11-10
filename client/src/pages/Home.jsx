import React from "react";

const HomePage = () => {
	return (
		<div className="container mx-auto mt-8">
			<Header />
			<Features />
			<SignupSection />
		</div>
	);
};

const Header = () => (
	<header className="text-center mb-8">
		<h1 className="text-4xl font-bold text-gray-800">StockTracker Pro</h1>
		<p className="text-lg text-gray-600">
			Your Ultimate Solution for Managing Your Stock Portfolio
		</p>
	</header>
);

const Features = () => (
	<section className="flex justify-around">
		<FeatureCard
			title="Track Your Stocks"
			description="Easily monitor the performance of your stock investments in real-time."
		/>
		<FeatureCard
			title="Portfolio Insights"
			description="Gain valuable insights into your portfolio with detailed analytics and reports."
		/>
		<FeatureCard
			title="User-Friendly Interface"
			description="Enjoy a seamless experience with our intuitive and user-friendly interface."
		/>
	</section>
);

const FeatureCard = ({ title, description }) => (
	<div className="max-w-md p-4 bg-white shadow-lg rounded-lg">
		<h2 className="text-xl font-bold mb-4">{title}</h2>
		<p className="text-gray-700">{description}</p>
	</div>
);

const SignupSection = () => (
	<section className="mt-8 text-center">
		<p className="text-lg text-gray-700">
			Start managing your stock portfolio with ease. Sign up for StockTracker
			Pro today!
		</p>
		<button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md">
			Sign Up Now
		</button>
	</section>
);

const Footer = () => (
	<footer className="mt-8 text-center text-gray-600"></footer>
);

export default HomePage;
