import './App.css';
import {useState} from "react";

import Page from "./components/Page";
import {ThemeContext} from "./components/ThemeContext";
import MealsList from "./components/MealsList";
import MealsProvider from "./components/MealsProvider";

function App() {
   const [isDark, setIsDark] = useState(["false", "see", "etc"])

   return (
       <div>
          <ThemeContext.Provider value={{isDark}}>
             <Page/>
          </ThemeContext.Provider>
          <MealsProvider/>
       </div>

   );
}

export default App;
