import { StringNormalize } from "../components/StringNormalize.js";

export class Recipe {
    constructor(
      id,
      name,
      servings,
      ingredients,
      time,
      description,
      appliance,
      ustensils,
      photo
    ) {
      this.id = id;
      this.name = name;
      this.servings = servings;
      this.ingredients = ingredients;
      this.time = time;
      this.description = description;
      this.appliance = appliance;
      this.ustensils = ustensils;
      this.photo = photo;
    }

    get stringifyRecipes() {
      return StringNormalize.normalizeAccents(JSON.stringify(this, null, " \t"));
    }
}