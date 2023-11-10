import React from "react";

function About() {
	return (
		<div>
			{Team()}
			{Mission()}
			{Individuals()}
		</div>
	);
}

function Team() {
	return (
		<div>
			<div className="px-4 pt-5 my-5 text-center border-bottom">
				<h1 className="display-4 fw-bold">About Us</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead mb-4 py-2">
						Welcome to our world of innovation and dedication! We are a
						passionate team of developers committed to making your life easier
						through technology.
					</p>
				</div>
				<div className="overflow-hidden" style={{ maxHeight: "50vh" }}>
					<div className="container px-5">
						<img
							src="https://plus.unsplash.com/premium_photo-1682630628981-e8e02970be27?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							className="img-fluid border rounded-3 shadow-lg mb-4"
							alt="Team"
							width="700"
							height="500"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
			<div class="b-example-divider"></div>
		</div>
	);
}

function Mission() {
	return (
		<div>
			<div class="px-4 py-5 my-5 text-center">
				<h1 class="display-5 fw-bold">Our Mission</h1>
				<div class="col-lg-6 mx-auto">
					<p class="lead mb-4 py-2">
						Our mission is to provide you with innovative solutions that
						simplify and enhance your experience. Whether it's crafting
						user-friendly applications or developing cutting-edge software,
						we're driven by the desire to bring excellence to every project.
					</p>
				</div>
				<div className="container px-5">
					<img
						src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						className="img-fluid border rounded-3 shadow-lg mb-4"
						alt="Team"
						width="700"
						height="500"
						loading="lazy"
					/>
				</div>
			</div>
			<div class="b-example-divider"></div>
		</div>
	);
}

function Individuals() {
	const featureBorderStyle = {
		borderRadius: "8px",
		padding: "15px",
		border: "1px solid #ddd",
		textAlign: "center",
	};

	const teamMembers = [
		{
			name: "Anisha Sharma",
			role: "Full Stack Web Dev, Natural Language Processing",
		},
		{ name: "Divija K", role: "Machine Learning" },
		{ name: "Harshita S", role: "Front-End Web Dev" },
	];

	return (
		<div>
			<div className="container px-4 py-5" id="featured-3">
				<h1 class="display-5 fw-bold text-center">Our Team</h1>
				<div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
					{teamMembers.map((member, index) => (
						<div key={index} className="feature col" style={featureBorderStyle}>
							<h2 className="fs-4 fw-bold mt-3">{member.name}</h2>
							<p className="py-1 fw-light">{member.role}</p>
						</div>
					))}
				</div>
			</div>
			<div className="h-20"></div>
		</div>
	);
}

export default About;
