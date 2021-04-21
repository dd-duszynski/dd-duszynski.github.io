import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AppProvider } from "../../context/context";
import Fallback from "../UI/Fallback";
import Layout from "../Layout/Layout";
const Main = lazy(() => import("../../pages/Main/Main"));
const Project = lazy(() => import("../../pages/Project/Project"));
const About = lazy(() => import("../../pages/About/About"));

const App = ({ lang }) => {
   const ContentSwitch = (
      <Switch>
         <Route path="/" exact>
            <Main />
         </Route>
         <Route path="/about" exact>
            <About />
         </Route>
         <Route path="/projects/:link" exact>
            <Project />
         </Route>
         <Redirect to="/" />
      </Switch>
   );

   return (
      <AppProvider lang={lang}>
         <BrowserRouter>
            <Layout>
               <Suspense fallback={<Fallback />}>{ContentSwitch}</Suspense>
            </Layout>
         </BrowserRouter>
      </AppProvider>
   );
};

export default App;
