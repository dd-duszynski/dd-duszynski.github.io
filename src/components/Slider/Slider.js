import React, { useState, useEffect } from "react";
import styles from "./Slider.module.scss";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const Slider = ({ elements }) => {
	const [currentImgIndex, setCurrentImgIndex] = useState(0);
	const elementsLength = elements.length;

   useEffect(() => {
      const keyPressHandler = (e) => {
         if (e.keyCode === 37) {
            handlePrevElement()
         } else if (e.keyCode === 39) {
            handleNextElement()
         } else if (e.keyCode === 27) {
            // handleModal()
         }
      }
      document.addEventListener('keydown', keyPressHandler)
      return () => document.removeEventListener('keydown', keyPressHandler)
   })

	const handlePrevElement = () => {
		if (currentImgIndex === 0) {
			setCurrentImgIndex(elementsLength - 1);
		} else {
			setCurrentImgIndex(currentImgIndex - 1);
		}
	};

	const handleNextElement = () => {
		if (currentImgIndex === elementsLength - 1) {
			setCurrentImgIndex(0);
		} else {
			setCurrentImgIndex(currentImgIndex + 1);
		}
	};

	return (
		<>
			<div className={styles.Slider}>
				<div className={styles.leftArrow} onClick={handlePrevElement}>
					<RiArrowLeftSLine className={styles.icon} />
				</div>

				<img
					className={styles.img}
					src={elements[currentImgIndex]}
					alt="screen"
				/>

				<div className={styles.rightArrow} onClick={handleNextElement}>
					<RiArrowRightSLine className={styles.icon} />
				</div>
			</div>
			<div className={styles.dots}>
				{elements.map((item, index) => (
					<div
						className={
							index === currentImgIndex
								? styles.dotActive
								: styles.dot
						}
						onClick={() => setCurrentImgIndex(index)}
					/>
				))}
			</div>
		</>
	);
};

export default Slider;
