import React from 'react';
import styles from './text-area.module.scss';

interface TextAreaProps {
  labelText: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const TextArea = ({
  labelText,
  placeholder,
  value,
  onChange,
}: TextAreaProps) => {
  return (
    <>
      <label className={styles.textAreaLabel} htmlFor='msg'>
        {labelText}
      </label>
      <textarea
        className={styles.textArea}
        required
        id='msg'
        draggable='false'
        rows={4}
        value={value || ''}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;
