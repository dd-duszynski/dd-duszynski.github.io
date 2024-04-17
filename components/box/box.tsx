import classNames from 'classnames';
import React from 'react';
import styles from './box.module.scss';

type BoxProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  addClass?: string;
  align?:
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'first baseline'
  | 'last baseline'
  | 'start'
  | 'end'
  | 'self-start '
  | 'self-end';
  justify?:
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
  onClick?: () => void;
  direction?:
  | 'row'
  | 'column'
};

const Box: React.FC<BoxProps> = ({
  as: Tag = 'div',
  children,
  addClass,
  align,
  direction,
  justify,
  onClick,
}) => {
  const justifyContent = justify ? justify : 'center';
  const alignItems = align ? align : 'center';
  const flexDirection = direction ? direction : 'row';

  return (
    <Tag
      className={classNames(addClass, styles.Box)}
      onClick={onClick}
      style={{
        justifyContent: justifyContent,
        alignItems: alignItems,
        flexDirection: flexDirection,
      }}
    >
      {children}
    </Tag>
  );
};

export default Box;
