import React from 'react';
import { Link } from 'react-router-dom';


function Recipe(props)

{
    
    return (
           <div className="Recipe">
             <img src ={props.data.image_url} alt={props.data.recipe_id} />
             <p>{props.data.title}</p>
             <button>
             <Link 
                to=
                    {`/recipe/${props.data.recipe_id}`}

            >View More
            </Link></button>
          </div>
          );
}

export default Recipe;