import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  id: string;
  labelText: string;
  value: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  id,
  labelText,
  value,
  placeholder,
  type,
  onChange,
}) => {
  return (
    <>
      <label className={styles.inputLabel} htmlFor={id}>
        {labelText}
      </label>
      <input
        className={styles.input}
        id={id}
        placeholder={placeholder}
        required
        type={type}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default Input;
