import React, {useContext} from 'react';
import {useMealsList} from "./MealsProvider";

const MealsList = () => {
   const data = useMealsList();
   console.log(data["meals"])
   return (
       <div>
          {data["meals"].map((value, idx) =>
              <h2 key={idx}>{value}</h2>
          )}
       </div>
   );
};

export default MealsList;