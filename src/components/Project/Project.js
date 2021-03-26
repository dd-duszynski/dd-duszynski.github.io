import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import styles from "./Project.module.scss";
import H1 from "../UI/H1";
import H2 from "../UI/H2";
import Box from "../UI/Box";
import Paragraph from "../UI/Paragraph";
import TechnologyRow from "../Technologies/TechnologyRow/TechnologyRow";
import TechnologyModal from "../Technologies/TechnologyModal/TechnologyModal";
import Modal from "../UI/Modal";
import Slider from "../Slider/Slider";

const Project = ({ link }) => {
	const {
		textContent: { projects },
		textContent: { technologies },
		handleModal,
		isModalOpen,
	} = useContext(AppContext);

	const [project] = projects.listOfProjects.filter(
		(i) => i.link === `/projects/${link}`
	);
	const [mainPhoto, ...photos] = project.photos;
	const [modalContent, setModalContent] = useState(null);
	const [choosenItem, setChoosenItem] = useState(null);

	const choosenItemHandler = (item) => {
		setChoosenItem(item);
	};

	const modalToggleHandler = (technology) => {
		setModalContent(technology);
		handleModal();
	};

	const arrOfTechnologies = technologies.all.filter(
		(i) => i.projects.findIndex((item) => item === project.title) >= 0
	);

	const modal = (
		<Modal show={isModalOpen} onCancel={handleModal}>
			<TechnologyModal name={modalContent} context={arrOfTechnologies} />
		</Modal>
	);
	return (
		<>
			{modal}
			<main className={styles.Project} id="projects">
         <Box >
				<img
					className={styles.mainPhoto}
					src={mainPhoto}
					alt="main img"
				/>

         </Box>
				<Box justify="space-between" align="flex-start" column>
					<H1 text={project.title} addClass={styles.h1} />
					<Box
						justify="flex-start"
						align="flex-start"
						column
						addClass={styles.paragraphBox}
					>
						<H2 
                     text={projects.roleInfo} 
                     addClass={styles.h2} 
                  />
						<Paragraph text={project.role} />
					</Box>
					<Box
						justify="flex-start"
						align="flex-start"
						column
						addClass={styles.paragraphBox}
					>
						<H2
							text={projects.descriptionInfo}
							addClass={styles.h2}
						/>
						{project.description.map((item) => (
							<Paragraph text={item} />
						))}
					</Box>
				</Box>
            <Box>
               <img src={"https://itcraftapps.com/wp-content/uploads/2019/09/pixoo-app-hi-fi-wireframes.jpg"} alt="" className={styles.mainPhoto}/>
            </Box>
				<Box>
					<TechnologyRow
						choosenItem={choosenItem}
						choosenItemHandler={choosenItemHandler}
						modalToggleHandler={modalToggleHandler}
						headerText={projects.technologyInfo}
						technologies={arrOfTechnologies}
					/>
				</Box>
				<Box justify="flex-start" align="flex-start" column>
					<H2 
                  text={projects.screens} 
                  addClass={styles.h2} 
               />
					<Slider elements={photos} />
				</Box>
			</main>
		</>
	);
};

export default Project;
