import {useEffect, useState} from 'react';
import Multiselect from "../../component/Multiselect";
import Recipe from "../../component/recipe";
import {useFilterStore, useRecipesStore} from "../../store/store";
import './index.css'
import {RecipesPropsType, RecipesStore} from "../../store/store.types";

const Home = () => {
  const {fetchRecipes, recipes,prevPage, nextPage, setPage} = useRecipesStore((state: RecipesStore) => ({
    recipes: state.recipes,
    fetchRecipes: state.fetchRecipes,
    nextPage: state.nextPage,
    prevPage: state.prevPage,
    setPage: state.setPage
  }))
  const [updateRecipes, setUpdateRecipes] = useState<RecipesPropsType[]>()
  const [down, setDown ] = useState(false)
  const [up, setUp] = useState(false)
  const [count, setCount] = useState(5)
  const {filterRecipes,} = useFilterStore()
  let res = updateRecipes?.length && updateRecipes[0].id

  useEffect(() => {
      fetchRecipes(nextPage)
  }, [nextPage])

  useEffect(() => {
    setPage(prevPage+1)
  }, [])

  useEffect(() => {
    if (filterRecipes.length) {
      let resRecipes = recipes.filter((item) =>
        item.name && filterRecipes.includes(item.name))
      setUpdateRecipes(resRecipes)
    } else if (filterRecipes?.length === 0) {
      setUpdateRecipes(recipes.slice(0, 15))
    }
  }, [filterRecipes, recipes])

  useEffect(() => {
    if (down) {
        setUpdateRecipes(recipes.slice(count, 15 + count))
        setCount(count + 5)
        setDown(false)
      if(15 + count === recipes.length){
        setPage(prevPage+1)
      }
    }
  }, [down, count, updateRecipes, recipes, nextPage])

  useEffect(() => {
    if (up && !(recipes[0]?.id === res)) {
      setUpdateRecipes(recipes.slice(count - 10, count + 5))
      setCount(count - 5)
      setUp(false)
      window.scrollBy(0, 20)
    }
  }, [up, recipes, res, count])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler)
    return () => {
      document.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  const scrollHandler = (e: any) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 10) {
      setDown(true)
    } else if (e.target.documentElement.scrollTop < 10) {
      setUp(true)
    } else if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 1){
      setPage(prevPage+1)
    }
  }

  return (
    <div className='container'>
      <Multiselect recipes={recipes}/>
      {
        updateRecipes?.length ? updateRecipes.map((recipe) =>
          <Recipe key={recipe.id} recipe={recipe}/>
        ) : ''
      }
    </div>
  );
};

export default Home;