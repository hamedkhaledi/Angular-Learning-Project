import { Recipe } from "../recipe.model";
import * as RecipesActions from "./recipe.action";
export interface State {
  recipes: Recipe[];
}

const initialState: State = { recipes: [] };

export function recipeReducer(state = initialState, action) {
  switch (action.type) {
    case RecipesActions.SET_RECIPES:
      return { ...state, recipes: [...action.payload] };
    default:
      return state;
  }
}
