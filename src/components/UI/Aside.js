import React from 'react'

const Aside = ({children}) => {
   return (
      <aside style={{
         display: 'inline-block',
         fontSize: '12px',
         right: '0',
         position: 'absolute',
         marginTop: '12px'
      }}>
         {`{${children}}`}
      </aside>
   )
}

export default Aside
