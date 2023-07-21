export interface IngredientsPropsType {
  hops: {
    add: string;
    amount: {value: number, unit: string;};
    attribute: string;
    name: string
  } [];
  malt: {
    amount: {
      unit: string;
      value: number;
    },
    name: string;
  } [];
}

export interface RecipesPropsType {
  id: number;
  image_url?: string;
  name?: string;
  brewers_tips?: string;
  food_pairing?: string[];
  description?: string;
  ingredients?: IngredientsPropsType;
}

export interface RecipesStore {
  recipes: RecipesPropsType[];
  fetchRecipes: (page?: number) => void;
  prevPage: number,
  nextPage: number,
  setPage: (page: number) => void;
}

export interface FilterPropsType {
  filterRecipes: string[];
  setFilter: (value: string[]) => void;
}