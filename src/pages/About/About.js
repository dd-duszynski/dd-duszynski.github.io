import React, { useEffect } from 'react';
import Layout from "../../components/Layout/Layout"
import AboutComponent from '../../components/About/About'

const About = () => {
   useEffect(() => {
      window.scroll({
         top: 0,
         behavior: 'smooth'
      });
   }, [])

   return (
      <Layout footerFixed>
         <AboutComponent
            text="Jam jest Damion"
         />
      </Layout>
   )
}

export default About
