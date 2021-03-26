import React, { useEffect } from "react";
import Technologies from "../../components/Technologies/Technologies";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Main = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	return (
		<>
			<Hero />
			<Projects />
			<Technologies />
			<Contact />
		</>
	);
};

export default Main;
