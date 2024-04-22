import { AppContext } from '@/context/context';
import classNames from 'classnames';
import { useContext } from 'react';
import SwitchIcon from '../switch-icon/switch-icon';
import styles from './technology-item.module.scss';

interface TechnologyItemProps {
  isChoosen: boolean;
  name: string;
  choosenItemHandler: (item: string | null) => void;
  modalToggleHandler: (technology: string) => void;
}

const TechnologyItem = ({
  isChoosen,
  name,
  choosenItemHandler,
  modalToggleHandler,
}: TechnologyItemProps) => {
  const { size, content } = useContext(AppContext);
  const openModalHandler = (name: string) => {
    modalToggleHandler(name);
    choosenItemHandler(null);
  };

  const clickHandler = () => {
    if (size < 1000 && isChoosen === true) {
      openModalHandler(name);
    } else if (size < 1000 && !isChoosen) {
      choosenItemHandler(name);
    } else if (size >= 1000) {
      modalToggleHandler(name);
    }
  };

  return (
    <li
      className={classNames(
        styles.technologyItem,
        isChoosen && styles.technologyItemChoosen
      )}
      onClick={clickHandler}
    >
      <div className={styles.container}>
        <div className={styles.front}>
          <SwitchIcon name={name} />
          <span className={styles.title}>{name}</span>
        </div>
        <div className={styles.back}>
          <span className={styles.backTitle}>
            {content.technologies.seeMore}
          </span>
        </div>
      </div>
    </li>
  );
};

export default TechnologyItem;
