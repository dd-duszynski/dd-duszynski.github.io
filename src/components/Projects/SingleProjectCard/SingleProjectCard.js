import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/context";
import styles from "././SingleProjectCard.module.scss";
import H2 from "../../UI/H2";
import H4 from "../../UI/H4";
import Box from "../../UI/Box";
import CardOverlay from "../../UI/CardOverlay";

const SingleProject = (item) => {
	const { title, role, shortDescription, photos, link } = item;
	const [isHover, setIsHover] = useState(false);

	const {
		textContent: { projects, listOfTechnologies },
		size,
	} = useContext(AppContext);

	const arrOfTechnologies = listOfTechnologies.filter(
		(i) => i.projects.findIndex((item) => item === title) >= 0
	);
	return (
		<article className={styles.SingleProject}>
			<Link to={link} className={styles.link}>
				<Box
					align="baseline"
					justify="space-between"
					addClass={styles.box}
				>
					<H2 text={title} />
					{size <= 1000 ? (
						<H4 addClass={styles.h4} text={`{${role}}`} />
					) : null}
				</Box>
            <Box
               addClass={styles.imgBox}
            >
               <img
                  src={photos[0]}
                  className={
                     isHover ? styles.projectImgHide : styles.projectImg
                  }
                  alt="project"
               />

            </Box>
				{size > 1000 ? (
					<CardOverlay
						isHover={isHover}
						setIsHover={setIsHover}
						projects={projects}
						role={role}
						shortDescription={shortDescription}
						technologies={arrOfTechnologies}
					/>
				) : null}
			</Link>
		</article>
	);
};

export default SingleProject;
