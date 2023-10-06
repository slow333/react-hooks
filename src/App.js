import './App.css';
import {useState} from "react";

import Page from "./useContextEx/Page";
import {ThemeContext} from "./useContextEx/ThemeContext";
import MealsList from "./useContextEx/MealsList";
import MealsProvider from "./useContextEx/MealsProvider";

function App() {
   const [isDark, setIsDark] = useState(["false", "see", "etc"])

   return (
       <div>
          <ThemeContext.Provider value={{isDark}}>
             <Page/>
          </ThemeContext.Provider>
          <MealsProvider>
             <MealsList/>
          </MealsProvider>
       </div>
   );
}

export default App;
