import React from 'react'
import styles from './Box.module.scss'

const Box = ({ children, justify, align, column, addClass, noWrap, onClick }) => {
   const justifyContent = justify ? justify : 'center';
   const alignItems = align ? align : 'center';
   const isFlexColumn = column && "column";

   return (
      <div
         className={[addClass, styles.Box ].join(' ')}
         onClick={onClick}
         style={{
            justifyContent: justifyContent,
            alignItems: alignItems,
            flexDirection: isFlexColumn,
            flexWrap: noWrap
         }}>
         {children}
      </div>
   )
}

export default Box
