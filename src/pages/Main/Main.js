import React, { useEffect,useContext } from "react";
import { AppContext } from "../../context/context"
import { Helmet } from "react-helmet";
import Technologies from "../../components/Technologies/Technologies";
import Hero from "../../components/Hero/Hero";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Main = () => {
   const { textContent } = useContext(AppContext)
   const { hero } = textContent
   useEffect(() => {
      window.scroll({
         top: 0,
         behavior: "smooth",
      });
   }, []);
   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Damian Duszyński | Frontend Developer | Personal Website</title>
            <meta name="description" content={`${hero[0]} ${hero[1]}`} />
            <link rel="canonical" href="https://dd-duszynski.pl/" />
         </Helmet>
         <Hero />
         <Projects />
         <Technologies />
         <Contact />
      </>
   );
};

export default Main;
