async function getRecipes() {
    // Récupére les données dans le json
    const response = await fetch("./datas/recipes.json")
    const data = await response.json()
    // Retourne le tableau recipes
    return ({
        recipes: data.recipes})
}

// Affiche les cards
async function displayData(recipes) {
    const cardsSection = document.getElementById("recipes")

    recipes.forEach((recipe) => {
        const cardModel = cardFactory(recipe)
        const recipeCardDOM = cardModel.getRecipeCardDOM()
        cardsSection.appendChild(recipeCardDOM)

        /*const ingSection = document.getElementById("ingredients")
        recipes.forEach((recipe) => {
            const ingModel = cardFactory(recipe)
            const ingCardDOM = ingModel.getIngredientCardDOM()
            ingSection.appendChild(ingCardDOM)
        })*/
    })
}

async function init() {
    const { recipes } = await getRecipes()
    displayData(recipes)
}

init()