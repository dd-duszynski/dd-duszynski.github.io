import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './paragraph.module.scss';

interface ParagraphProps {
  text: string | ReactNode;
  addClass?: string;
  breakLine?: boolean;
  bold?: boolean;
}

const Paragraph = ({ text, addClass, bold, breakLine }: ParagraphProps) => {
  return (
    <p
      className={classNames(
        styles.paragraph,
        breakLine && styles.breakLine,
        bold && styles.bold,
        addClass
      )}
    >
      {text}
    </p>
  );
};

export default Paragraph;
