import React from 'react';
import Layout from "../../components/Layout/Layout"
import Technologies from "../../components/Technologies/Technologies"
import Hero from "../../components/Hero/Hero"
import Strapi from "../../components/Strapi/Strapi"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"

const Main = () => {
   return (
      <Layout>
         <Hero />
         {/* <Strapi/> */}
         <Projects />
         <Technologies />
         <Contact />
      </Layout>
   )
}

export default Main
