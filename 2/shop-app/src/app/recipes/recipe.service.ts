import { Subject } from 'rxjs'
import { Injectable } from '@angular/core'
import { Ingredient } from '../Shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'
@Injectable()
export class RecipeService {
  recipesChange = new Subject<Recipe[]>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)],
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
    ),
  ]

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice() // copy array
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  getRecipe(index) {
    return this.recipes[index]
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChange.next(this.recipes.slice())
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe
    this.recipesChange.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipesChange.next(this.recipes.slice())
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipesChange.next(this.recipes.slice())
  }
}
