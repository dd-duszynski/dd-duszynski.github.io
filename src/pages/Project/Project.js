import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from "../../components/Layout/Layout"
import ProjectComponent from "../../components/Project/Project"


const Projects = () => {
   const { link } = useParams();

   return (
      <Layout footerFixed>
         <ProjectComponent link={link} />
      </Layout >
   )
}

export default Projects
