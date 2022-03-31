import { StringNormalize } from "../components/StringNormalize.js";

export class RecipesList {
    constructor(recipes) {
      this.recipes = recipes;
      this.Allrecipes = recipes;
    }

    // Retourne toutes les recettes
    getAllRecipes() {
      this.recipes = this.Allrecipes;
      return this.Allrecipes;
    }

    // Retourne tous les ingrédients
    getAllIngredients() {
      const allIngredients = new Set();

      for (let recipe of this.recipes) {
        for (let i = 0; i < recipe.ingredients.length; i++) {
          let normalAcc = StringNormalize.normalizeAccents(recipe.ingredients[i].ingredient);
          let normalIngr = StringNormalize.capitalizeFirstChar(normalAcc);
          allIngredients.add(normalIngr);
        }
      }
      return [...allIngredients];
    }

    // Retourne tous les appareils
    getAllAppliances() {
      const allAppliances = new Set();

      for (let recipe of this.recipes) {
        allAppliances.add(recipe.appliance);
      }
      return [...allAppliances];
    }

    // Retourne tous les ustensiles
    getAllUstensils() {
      const allUstensils = new Set();

      for (let recipe of this.recipes) {
        for (let i = 0; i < recipe.ustensils.length; i++) {
          let normalAcc = StringNormalize.normalizeAccents(recipe.ustensils[i]);
          let normalUst = StringNormalize.capitalizeFirstChar(normalAcc);
          allUstensils.add(normalUst);
        }
      }
      return [...allUstensils];
    }
}