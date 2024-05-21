import Paragraph from '../paragraph/paragraph';
import SwitchIcon from '../switch-icon/switch-icon';
import styles from './timeline-card.module.scss';

interface TimelineCardProps {
  bottomHeader: string;
  isLast: boolean;
  paragraphs: string[];
  skills: string[];
  topHeader: string;
}

const TimelineCard = ({
  bottomHeader,
  isLast,
  paragraphs,
  topHeader,
  skills,
}: TimelineCardProps) => {
  return (
    <div className={styles.timelineCard}>
      <div className={styles.card}>
        <Paragraph text={topHeader} addClass={styles.topHeader} bold />
        <div className={styles.line} />
        <Paragraph text={bottomHeader} addClass={styles.bottomHeader} bold />
        <div className={styles.dot1} />
        <div className={styles.dot2} />
      </div>
      {paragraphs.map((item) => (
        <Paragraph text={item} key={item} addClass={styles.paragraphWithDot} />
      ))}
      <div className={styles.iconsContainer}>
        {skills.map((skill) => (
          <SwitchIcon name={skill} key={skill} withTooltip />
        ))}
      </div>
      {isLast && <div className={styles.lastElement} />}
    </div>
  );
};

export default TimelineCard;
