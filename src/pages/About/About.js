import React, { useEffect } from "react";
import AboutComponent from "../../components/About/About";

const About = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return <AboutComponent />;
};

export default About;
