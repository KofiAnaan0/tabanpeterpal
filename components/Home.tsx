import React from "react";
import Hero from "./HomePage/Hero";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";
import Review from "./HomePage/Review";
import Brand from "./HomePage/Brand";

const Home = () => {
	return (
		<div className="w-full overflow-hidden">
			<Hero />
			<Brand/>
			<Approach />
			<Review />
			<Contact />
		</div>
	);
};

export default Home;
