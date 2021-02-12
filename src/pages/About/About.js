import React from 'react';
import Layout from "../../components/Layout/Layout"
import AboutComponent from '../../components/About/About'

const About = () => {
   return (
      <Layout footerFixed>
         <AboutComponent
            text="Jam jest Damion"
         />
      </Layout>
   )
}

export default About
