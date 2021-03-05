import React from "react";
import styles from "./Playground.module.scss";
import Paragraph from "../UI/Paragraph";
import H1 from "../UI/H1";
import H2 from "../UI/H2";
import Box from "../UI/Box";

const Playground = () => {
	return (
		<section className={styles.Playground}>
			<Box column align="flex-start">
				<H1 text="Playground" />
				<Paragraph text="Poniżej znajduje się kilka mniejszych projektów wykonanych głównie w celach szkoleniowo rozrywkowych :)" />
			</Box>
			<Box column align="flex-start">
				<H2 text="Hulk" />
				<iframe
					height="500px"
					style={{ width: "100%" }}
					scrolling="no"
					title="Hulk"
					src="https://codepen.io/kitjenson/embed/jOVxrvQ?height=265&theme-id=dark&default-tab=result"
					frameborder="no"
					loading="lazy"
					allowtransparency="true"
					allowfullscreen="true"
				>
					See the Pen{" "}
					<a href="https://codepen.io/kitjenson/pen/jOVxrvQ">Hulk</a>{" "}
					by Kit Jenson (
					<a href="https://codepen.io/kitjenson">@kitjenson</a>) on{" "}
					<a href="https://codepen.io">CodePen</a>.
				</iframe>
			</Box>
			<Box column align="flex-start">
				<H2 text="Donatello" />
				<iframe
					height="500"
					style={{ width: "100%" }}
					scrolling="no"
					title="codepen challenge TMNT "
					src="https://codepen.io/andrewrock/embed/yLVjNqp?height=265&theme-id=dark&default-tab=result"
					frameborder="no"
					loading="lazy"
					allowtransparency="true"
					allowfullscreen="true"
				>
					See the Pen{" "}
					<a href="https://codepen.io/andrewrock/pen/yLVjNqp">
						codepen challenge TMNT{" "}
					</a>{" "}
					by Andrew (
					<a href="https://codepen.io/andrewrock">@andrewrock</a>) on{" "}
					<a href="https://codepen.io">CodePen</a>.
				</iframe>
			</Box>
		</section>
	);
};

export default Playground;
