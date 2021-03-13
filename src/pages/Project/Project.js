import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../../components/Layout/Layout"
import ProjectComponent from "../../components/Project/Project"


const Project = () => {
   const { link } = useParams();
   useEffect(() => {
      window.scroll({
         top: 0,
         behavior: 'smooth'
      });
   }, [])

   return (
      <Layout>
         <ProjectComponent link={link} />
      </Layout >
   )
}

export default Project
