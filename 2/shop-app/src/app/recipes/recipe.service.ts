import { Recipe } from './recipe.model';

export class RecipeService {

    recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
        ),
    ];
    getRecipes() {
        return this.recipes.slice(); // copy array
    }
}