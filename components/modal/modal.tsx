import React from 'react';
import styles from './modal.module.scss';
import Portal from './portal';

interface ModalProps {
  children: React.ReactNode;
  show: boolean;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, show, onCancel }) => {
  return show ? (
    <Portal selector='#modal'>
      <div className={styles.backdrop} onClick={onCancel} />
      <div className={styles.modal}>{children}</div>
    </Portal>
  ) : null;
};

export default Modal;
