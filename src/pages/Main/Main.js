import React from 'react';
import Layout from "../../components/Layout/Layout"
import Technologies from "../../components/Technologies/Technologies"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"

const Main = () => {
   return (
      <Layout footerFixed>
         <Hero />
         <Projects />
         <Technologies />
         <Contact />
      </Layout>
   )
}

export default Main
