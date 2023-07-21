import React from "react";
import './index.css';
import {Link} from "react-router-dom";
import {RecipesPropsType} from "../../store/store.types";

const Recipe: React.FC<{ recipe: RecipesPropsType }> = ({recipe}) => {

  return (
    <>
    <Link className='container-recipe' to={`/${recipe?.id}`}>
      <div className='content'>
        <img className='image-style' src={recipe?.image_url} alt=''/>
        <div>
          <p>{recipe?.name}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

export default Recipe;