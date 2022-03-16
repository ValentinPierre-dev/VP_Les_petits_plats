async function getRecipes() {
    // Récupére les données dans le json
    const response = await fetch("./datas/recipes.json");
    const data = await response.json();
    // Retourne le tableau recipes
    return ({
        recipes: data.recipes})
}

// Affiche les cards
async function displayData(recipes) {
    const cardsSection = document.getElementById("recipes");

    recipes.forEach((recipe) => {
        const cardModel = cardFactory(recipe);
        const recipeCardDOM = cardModel.getRecipeCardDOM();
        cardsSection.appendChild(recipeCardDOM);
    });
};

async function init() {
    const { recipes } = await getRecipes();
    displayData(recipes)
}

init()