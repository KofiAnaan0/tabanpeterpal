import React from "react";
import Hero from "./HomePage/Hero";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";
import Review from "./HomePage/Review";

const Home = () => {
	return (
		<div className="w-full overflow-hidden">
			<Hero />
			<Approach />
			<Review />
			<Contact />
		</div>
	);
};

export default Home;
