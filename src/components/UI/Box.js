import React from 'react'
import styles from './Box.module.scss'

const Box = ({ children, justify, align }) => {
   const justifyContent = justify ? justify : 'center';
   const alignItems = align ? align : 'center';

   return (
      <div 
         className={styles.Box} 
         style={{ 
            justifyContent: justifyContent,
            alignItems: alignItems
         }}>
         {children}
      </div>
   )
}

export default Box
