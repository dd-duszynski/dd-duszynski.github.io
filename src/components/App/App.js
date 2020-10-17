import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppProvider } from '../../context/context'
import Layout from "../Layout/Layout"
import Technologies from "../Technologies/Technologies"
import Hero from "../Hero/Hero"
import Projects from "../Projects/Projects"
import Contact from "../Contact/Contact"
import Materials from '../Materials/Materials'
const App = ({ lang }) => {

   const ContentSwitch = (
      <Switch>
         <Route path='/' exact>
            <Layout footerFixed>
               <Hero />
               <Projects />
               <Technologies />
               <Contact />
            </Layout>
         </Route>
         <Route path='/projects' exact>
            <Layout footerFixed>
               <Projects />
            </Layout >
         </Route>
         <Route path='/materials' exact>
            <Layout footerFixed>
               <Materials />
            </Layout >
         </Route>
         <Route path='/about' exact>
            <Layout footerFixed>
               <h1>O mnie</h1>
            </Layout>
         </Route>
         <Redirect to='/' />
      </Switch>
   )

   return (
      <AppProvider lang={lang}>
         <BrowserRouter>
            {ContentSwitch}
         </BrowserRouter>
      </AppProvider>
   );
}

export default App;



