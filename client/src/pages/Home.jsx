import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";

function Home() {
	return (
		<div>
			{Intro()}
			{Features()}
			{Reviews()}
		</div>
	);
}

function Intro() {
	return (
		<div className="container col-xxl-8 px-4 py-5 bg-light">
			<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src="https://img.freepik.com/free-photo/cropped-image-businessman-sitting-by-table-cafe-analyzing-indicators-laptop-computer_171337-5598.jpg?w=1800&t=st=1699638193~exp=1699638793~hmac=1d777e1fb6d7d842dd084d10e0f18dbe932a39644047fe5f96124dc105c24455"
						className="d-block mx-lg-auto img-fluid"
						alt="Stock Market Analysis"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6 text-dark">
					<h1 className="display-5 fw-bold lh-1 mb-3">
						Track Your Stocks with Ease
					</h1>
					<p className="lead mb-4">
						Stay on top of your investments and make informed decisions with our
						stock tracking platform - real-time stock prices, historical data,
						and AI insights.
						<br />
						Whether you're a seasoned investor or just getting started, we've
						got you covered.
					</p>
					<div className="d-grid gap-2 d-md-flex justify-content-md-start">
						<button
							type="button"
							className="btn btn-secondary btn-lg px-4 me-md-2 text-dark"
						>
							Get Started Today!
						</button>
						<button
							type="button"
							className="btn btn-dark btn-lg px-4 me-md-2 text-dark"
						>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function Features() {
	return (
		<div className="container px-4 py-5">
			<h2 className="pb-2 border-bottom fs-2">Features</h2>
			<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-1 py-5">
				<div className="col">
					<Card className="flex-fill ">
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1612010167108-3e6b327405f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<Card.Body>
							<Card.Title>StockTrackerPro</Card.Title>
							<Card.Text>
								Your one-stop solution for tracking and managing your stock
								portfolio.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col">
					<Card className="flex-fill">
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1495364141860-b0d03eccd065?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<Card.Body>
							<Card.Title>Real-Time Market Data</Card.Title>
							<Card.Text>
								Stay informed with live stock updates and dynamic market
								insights.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="col">
					<Card className="flex-fill">
						<Card.Img
							variant="top"
							src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<Card.Body>
							<Card.Title>Diversify Your Investments</Card.Title>
							<Card.Text>
								Explore a wide range of stocks and build a diversified
								investment portfolio effortlessly.
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
}

function Reviews() {
	const imageBorderStyle = {
		border: "2px solid #ddd",
		borderRadius: "8px",
	};

	return (
		<div className="container">
			<h2 className="pb-2 border-bottom fs-2">Customer Reviews</h2>
			<Carousel style={{ height: "300px", overflow: "hidden" }}>
				<Carousel.Item>
					<div className="py-5 d-flex justify-content-center align-items-center">
						<div>
							<img
								className="d-block"
								src="https://images.unsplash.com/photo-1573496800808-56566a492b63?q=80&w=418&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="First slide"
								style={{
									...imageBorderStyle,
									maxHeight: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
						<div className="p-3" style={{ maxWidth: "500px" }}>
							<h5 className="text-black fw-bold">Emily Thompson</h5>
							<p className="fst-italic p-2">
								"I've been using this service for the past six months, and it's
								been a game-changer for managing my stock portfolio. The user
								interface is intuitive, and the real-time updates keep me
								informed about market changes. Highly recommended!"
							</p>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="py-5 d-flex justify-content-center align-items-center">
						<div>
							<img
								className="d-block"
								src="https://images.unsplash.com/photo-1619380916644-8dbef3724106?q=80&w=418&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Second slide"
								style={{
									...imageBorderStyle,
									maxHeight: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
						<div className="p-3" style={{ maxWidth: "500px" }}>
							<h5 className="text-black fw-bold">Mark Rodriguez</h5>
							<p className="fst-italic p-2">
								"As a novice investor, this platform has been invaluable. The
								educational resources helped me understand market trends, and
								the diverse set of features made it easy to diversify my
								investments. Thumbs up!"
							</p>
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="py-5 d-flex justify-content-center align-items-center">
						<div>
							<img
								className="d-block"
								src="https://images.unsplash.com/photo-1606415918835-88d0614e75ad?q=80&w=418&h=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Third slide"
								style={{
									...imageBorderStyle,
									maxHeight: "300px",
									objectFit: "cover",
								}}
							/>
						</div>
						<div className="p-3" style={{ maxWidth: "500px" }}>
							<h5 className="text-black fw-bold">Alice Johnson</h5>
							<p className="fst-italic p-2">
								"I can't imagine tracking my stocks without this tool. The AI
								insights provided are surprisingly accurate, and the historical
								data analysis helps me make informed decisions. Great platform
								for both beginners and experienced investors."
							</p>
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
			<div className="h-20"></div>
			<div className="h-20"></div>
		</div>
	);
}

export default Home;
