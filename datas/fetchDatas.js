import { Recipe } from "../scripts/class/Recipe.js"
import { RecipesList } from "../scripts/class/RecipesList.js"

export class FetchDatas {
    constructor(data) {
        this.data = data;
    }
    
    // Récupère et retourne et la liste des données dans un tableau

    getRecipesList() {
        const recipes = [];
    
        for (let recipe of this.data) {
            recipes.push(
                new Recipe(
                recipe.id,
                recipe.name,
                recipe.servings,
                recipe.ingredients,
                recipe.time,
                recipe.description,
                recipe.appliance,
                recipe.ustensils,
                recipe.photo
                )
            );
        }
    
        return new RecipesList(recipes);
    }
}