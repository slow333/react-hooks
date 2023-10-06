import React, {createContext, useContext, useState} from 'react';
import MealsList from "./MealsList";

const myMeals = ["rice", "pizza", "cheese","sojoo"]
const MealsContext = createContext()

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(myMeals);
    return (
        <MealsContext.Provider value={{meals}}>
           {children}
        </MealsContext.Provider>
    );
};
export const useMealsList = () => useContext(MealsContext)

export default MealsProvider;