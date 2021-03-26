import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectComponent from "../../components/Project/Project";

const Project = () => {
	const { link } = useParams();
	useEffect(() => {
		window.scroll({
			top: 0,
			behavior: "smooth",
		});
	}, []);

	return <ProjectComponent link={link} />;
};

export default Project;
