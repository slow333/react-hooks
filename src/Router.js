import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import HomePage from "./navComponents/HomePage";
import AboutMe from "./navComponents/AboutMe";
import NavApp from "./navComponents/NavApp";

const Router = createBrowserRouter([
   {
      path: "/",
      element: <NavApp/>
   },
   {
      path: "/home",
      element: <HomePage/>
   },
   {
      path: "about-me",
      element: <AboutMe/>
   }
])

export default Router;