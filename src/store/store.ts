import {create} from "zustand";
import {FilterPropsType, RecipesStore} from "./store.types";

export const useRecipesStore = create<RecipesStore>((set, get) => ({
  recipes: [],
  prevPage: 0,
  nextPage: 0,
  fetchRecipes: async (page) => {
    if(get().nextPage > get().prevPage) {
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${get().nextPage}`)
      const nextRecipes = await response.json();
      set({recipes: [...get().recipes, ...nextRecipes]})
    }
  },
  setPage: async (page: number)=>{
    set({prevPage: get().nextPage, nextPage: page})
  }
}))

export const useFilterStore = create<FilterPropsType>(set => ({
  filterRecipes: [],
  setFilter: (value) => set({filterRecipes: value})
}))