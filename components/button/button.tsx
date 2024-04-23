import styles from './button.module.scss';

type ButtonProps = {
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
};

const Button = ({ text, type }: ButtonProps) => {
  return (
    <button type={type} className={styles.Button}>
      {text}
    </button>
  );
};

export default Button;
