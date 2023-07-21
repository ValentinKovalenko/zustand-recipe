import {useRecipesStore} from "../../store/store";
import {RecipesPropsType, RecipesStore} from "../../store/store.types";
import {useLocation} from "react-router-dom";
import './index.css'
import {useEffect, useState} from "react";

const PageRecipe = () => {
  const [recipe, setRecipe] = useState<RecipesPropsType>()
  const {recipes} = useRecipesStore((state: RecipesStore) => ({
    recipes: state.recipes,
  }))
  const location = useLocation()

  useEffect(() => {
    const res = recipes?.find((item) => item.id === Number(location.pathname.replace('/', '')))
    setRecipe(res)
  }, [recipes, location.pathname])

  return (
    <div className='wrap'>
      <h3>{recipe?.name}</h3>
      <div>
        <img className='image' src={recipe?.image_url} alt=''/>
        <p>Tips: {recipe?.brewers_tips}</p>
        <div>Food pairing: {
          recipe?.food_pairing && recipe?.food_pairing.map((item,index) =>
            <p key={index}>{item}</p>)}
        </div>
        <h4>Recipe</h4>
        <p>({recipe?.description})</p>
        <h4>Ingredients</h4>
        <div className='ingredients'>
          <div className='ingredients-content'>
            Hops: {recipe?.ingredients?.hops && recipe.ingredients.hops.map((item,index) =>
            <p key={index}>{item.name} {item.attribute} {item.amount.value} {item.amount.unit}</p>
          )}
          </div>
          <div className='ingredients-content'>
            Malt: {recipe?.ingredients?.malt && recipe?.ingredients?.malt.map((item, index)=>
          <p key={index}>{item.name} {item.amount.value} {item.amount.unit}</p>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageRecipe;