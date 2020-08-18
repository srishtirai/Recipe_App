import React from 'react';
import Recipe from './Recipe';

function Recipes(props)
{
     return(
       <div classname="back">
         {
            props.recipes.map(recipe=><Recipe key={recipe.recipe_id} data={recipe}/>)
         }
       </div>
     );
}

export default Recipes;

