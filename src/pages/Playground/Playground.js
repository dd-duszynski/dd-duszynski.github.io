import React, {useEffect} from 'react';
import Layout from "../../components/Layout/Layout"
import PlaygroundComponent from "../../components/Playground/Playground"

const Playground = () => {
   useEffect(() => {
      window.scroll({
         top: 0,
         behavior: 'smooth'
      });
   }, [])
   return (
      <Layout>
         <PlaygroundComponent/>
      </Layout >
   )
}

export default Playground
