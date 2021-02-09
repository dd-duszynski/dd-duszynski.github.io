import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Strapi = () => {
   const [strapi, setStrapi] = useState(null)
   useEffect(() => {
      axios.get('http://localhost:1337/technologies').then(response => {
         console.log(response);
         setStrapi(response.data)
      });
   }, [])
   return (
      <div>
         {strapi ? (
            strapi.map(i => <p>{i.Title}</p>)
         ): 'Loading...'}
      </div>
   )
}

export default Strapi
