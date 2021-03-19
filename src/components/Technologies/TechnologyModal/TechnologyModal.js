import React, { useContext, useState } from "react";
import styles from "./TechnologyModal.module.scss";
import Box from "../../UI/Box";
import H1 from "../../UI/H1";
import H2 from "../../UI/H2";
import Paragraph from "../../UI/Paragraph";
import SwitchIcon from "../TechnologyItem/SwitchIcon";
import { BiLinkExternal } from "react-icons/bi";
import { GrYoutube } from "react-icons/gr";
import {
	RiArrowRightSLine,
	RiArrowLeftSLine,
} from "react-icons/ri";
import { AppContext } from "../../../context/context";

const findNextAndPrevIndex = (name, arr) => {
	const arrLength = arr.length;
	const currentTech = arr.findIndex((i) => i.name === name);
	let nextIndex, prevIndex;
	if (currentTech + 1 === arrLength) {
		//last
		nextIndex = 0;
		prevIndex = currentTech - 1;
	} else if (currentTech === 0) {
		//first
		nextIndex = 1;
		prevIndex = arrLength - 1;
	} else if (currentTech + 1 < arrLength) {
		//rest
		nextIndex = currentTech + 1;
		prevIndex = currentTech - 1;
	}
	return [nextIndex, prevIndex];
};

const TechnologyModal = ({ name, context }) => {
	const [choosenTechnology, setChoosenTechnology] = useState(name);
	// const {
	// 	textContent: { technologies },
	// } = useContext(AppContext);
   const technologies = context

	const [choosenContent] = technologies.filter(
		(i) => i.name === choosenTechnology
	);
	const [nextTechnologyIndex, prevTechnologyIndex] = findNextAndPrevIndex(
		choosenTechnology,technologies);

	const prevTechnology = technologies[prevTechnologyIndex].name;
	const nextTechnology = technologies[nextTechnologyIndex].name;

	return (
		<div className={styles.TechnologyModal}>
			<Box addClass={styles.header} justify="space-between">
				<Box column align="flex-start">
					<H1 text={choosenContent.name} />
					<Paragraph
						text={choosenContent.fullName}
						addClass={styles.subtitle}
					/>
				</Box>
				<SwitchIcon name={choosenTechnology} />
			</Box>
			<div className={styles.line} />
			<Paragraph
				text={choosenContent.description}
				addClass={styles.paragraph}
			/>
			<H2 text="Dowiedz się więcej:" addClass={styles.h2} />
			{choosenContent.links.map((i) => (
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={i[1]}
					className={styles.link}
					key={i[1]}
				>
					{i[2] === "yt" ? (
						<GrYoutube className={styles.icon} />
					) : (
						<BiLinkExternal className={styles.icon} />
					)}
					<Paragraph text={i[0]} />
				</a>
			))}

			<div
				className={styles.leftBtn}
				onClick={() => setChoosenTechnology(prevTechnology)}
			>
				<RiArrowLeftSLine className={styles.iconLeftArrow} />
				{prevTechnology}
			</div>
			<div
				className={styles.rightBtn}
				onClick={() => setChoosenTechnology(nextTechnology)}
			>
				{nextTechnology}
				<RiArrowRightSLine className={styles.iconRightArrow} />
			</div>
		</div>
	);
};

export default TechnologyModal;
