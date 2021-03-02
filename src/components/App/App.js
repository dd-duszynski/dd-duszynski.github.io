import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppProvider } from '../../context/context'
import Main from '../../pages/Main/Main'
import Playground from '../../pages/Playground/Playground'
import Project from "../../pages/Project/Project"
import About from "../../pages/About/About"

const App = ({ lang }) => {
   const ContentSwitch = (
      <Switch>
         <Route path='/' exact>
            <Main />
         </Route>
         <Route path='/projects/:link' exact>
            <Project />
         </Route>
         <Route path='/playground' exact>
            <Playground />
         </Route>
         {/* <Route path='/materials' exact>
            <Materials />
         </Route> */}
         <Route path='/about' exact>
            <About />
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



