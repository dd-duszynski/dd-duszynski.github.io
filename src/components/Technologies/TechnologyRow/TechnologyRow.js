import React from "react";
import styles from "./TechnologyRow.module.scss";
import Box from "../../UI/Box";
import H2 from "../../UI/H2";
import TechnologyItem from "../TechnologyItem/TechnologyItem";

const TechnologyRow = ({
	headerText,
	technologies,
	modalToggleHandler,
	choosenItem,
	choosenItemHandler,
}) => {
	return (
		<article className={styles.TechnologyRow}>
			<Box justify="flex-start" align="center" addClass={styles.box}>
				<H2 text={headerText} />
			</Box>
			<ul className={styles.technologyList}>
				{technologies.map((item) => (
					<TechnologyItem
						key={item.name}
						name={item.name}
						choosenItemHandler={choosenItemHandler}
						modalToggleHandler={() => modalToggleHandler(item.name)}
						isChoosen={choosenItem === item.name}
					/>
				))}
			</ul>
		</article>
	);
};

export default TechnologyRow;
