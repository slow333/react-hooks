import React, {useContext} from 'react';
import {useMealsList} from "./MealsProvider";

const MealsList = () => {
   const data = useMealsList()["meals"];
   console.log(data)
   return (
       <div>
          {data.map((value, idx) =>
              <h2 key={idx}>{value}</h2>
          )}
       </div>
   );
};

export default MealsList;