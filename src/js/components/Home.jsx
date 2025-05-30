import React from "react";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";


const Home = () => {
	return (
		<div className="text-center">
			<Header />
			<Content />
			<Footer />
		</div>
	);
};

export default Home;