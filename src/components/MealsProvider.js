import React, {createContext, useContext, useState} from 'react';
import MealsList from "./MealsList";

const myMeals = ["rice", "pizza", "cheese","sojoo"]
const MealsContext = createContext(null)

const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(myMeals);
    return (
        <MealsContext.Provider value={{meals}}>
            <MealsList />
        </MealsContext.Provider>
    );
};
export const useMealsList = () => useContext(MealsContext)

export default MealsProvider;