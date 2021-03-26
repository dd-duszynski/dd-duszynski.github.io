import React, { useEffect } from "react";
import PlaygroundComponent from "../../components/Playground/Playground";

const Playground = () => {
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);
	return <PlaygroundComponent />;
};

export default Playground;
