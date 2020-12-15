import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppProvider } from '../../context/context'

import Main from '../../pages/Main/Main'
import Materials from '../../pages/Materials/Materials'
import Projects from "../../pages/Projects/Projects"
import About from "../../pages/About/About"

const App = ({ lang }) => {
   const ContentSwitch = (
      <Switch>
         <Route path='/' exact>
            <Main />
         </Route>
         <Route path='/projects' exact>
            <Projects />
         </Route>
         <Route path='/materials' exact>
            <Materials />
         </Route>
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



