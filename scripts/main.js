import { ALLRECIPES } from "../datas/recipes.js";
import { FetchDatas } from "../datas/fetchDatas.js";
import { DOMBuilder } from "./pages/DOMBuilder.js";

const fetchDatas = new FetchDatas(ALLRECIPES);

const recipesList = fetchDatas.getRecipesList(fetchDatas);

//new DOMBuilder(recipesList).displayCards(ALLRECIPES);
new DOMBuilder(recipesList).displayPage();