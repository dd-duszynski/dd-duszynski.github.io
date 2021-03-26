import React, { useContext } from "react";
import SingleProjectCard from "./SingleProjectCard/SingleProjectCard";
import styles from "./Projects.module.scss";
import H1 from "../UI/H1";
import { AppContext } from "../../context/context";
import Box from "../UI/Box";

const Projects = () => {
	const {
		textContent: { projects },
	} = useContext(AppContext);
	return (
		<section className={styles.Projects} id="projects">
			<Box justify="center" align="flex-start" column>
				<H1 text={projects.title} addClass={styles.h1} />
				{projects.listOfProjects.map((item, index) => {
					return <SingleProjectCard key={index} {...item} />;
				})}
			</Box>
		</section>
	);
};

export default Projects;
