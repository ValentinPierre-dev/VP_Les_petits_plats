function cardFactory(data) {
    const { name, ingredients, time, description, photo } = data;
    const { ingredient, quantity, unit } = ingredients

    const picture = `./images/assets/${photo}`;
    console.log(data.ingredients)
    // Construit la card de la recette
    function getRecipeCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
        <!-- Card d'une recette -->
        <div class="col">
            <div class="card">

                <!-- Image de la card -->
                <img src="${picture}" class="card-img-top" alt="${name}"/>

                <!-- Corps de la card -->
                <div class="card-body">

                    <!-- En-tête titre et temps -->
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">${name}</h5>
                        <div class="d-flex align-items-baseline time">
                            <i class="fa fa-clock"></i>
                            <p>${time} min</p>
                        </div>
                    </div>

                    <div class="row">

                        <!-- Liste des ingrédients -->
                        <div class="col" id="ingredients">
                            <div>
                                <span class="card-text ingredients">${ingredients[ingredient]} : </span>
                                <span class="card-text quantity">${quantity} ${unit}</span>
                            </div>
                        </div>

                        <!-- Description de la recette -->
                        <div class="col">
                            <p class="card-text recipe-desc">${description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return (article);
    }

        /* Construit la card de la recette
        function getIngredientCardDOM() {
            const article = document.createElement( 'div' );
            article.innerHTML = `
                <span class="card-text ingredients">${ingredient} : </span>
                <span class="card-text quantity">${quantity} ${unit}</span>
            `
            return (article);
        }*/

    return { name, time, description, picture, ingredients, ingredient, quantity, unit, getRecipeCardDOM }
}