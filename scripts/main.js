import { allRecipes } from "../datas/recipes.js";
import { FetchDatas } from "../datas/fetchDatas.js";
import { DOMBuilder } from "./pages/DOMBuilder.js";

const fetchDatas = new FetchDatas(allRecipes);

const recipesList = fetchDatas.getRecipesList(fetchDatas);

new DOMBuilder(recipesList).displayDropdowns();
new DOMBuilder(recipesList).displayCards(allRecipes);