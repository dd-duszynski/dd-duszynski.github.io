import React from 'react'
import styles from './Box.module.scss'

const Box = ({ children, justify, align, column, addClass, noWrap }) => {
   const justifyContent = justify ? justify : 'center';
   const alignItems = align ? align : 'center';
   const isFlexColumn = column ? "column" : 'row';

   return (
      <div
         className={[styles.Box, addClass].join(' ')}
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
