function cardFactory(data) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } = data;

    //const picture = `assets/photographers/${portrait}`;

    // Construit la card de la recette
    function getRecipeCardDOM() {
        const article = document.createElement( 'article' );
        article.innerHTML = `
        <!-- Card d'une recette -->
        <div class="col">
            <div class="card">

                <!-- Image de la card -->
                <img src="https://picsum.photos/500/300?grayscale" class="card-img-top" alt="Hollywood Sign on The Hill"/>

                <!-- Corps de la card -->
                <div class="card-body">

                    <!-- En-tête titre et temps -->
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title">${name}</h5>
                        <div class="d-flex align-items-baseline">
                            <i class="fa fa-clock"></i>
                            <p>${time} min</p>
                        </div>
                    </div>

                    <!-- Liste des ingrédients -->
                    <div class="row">
                        <div class="col">
                            <div>
                                <span class="card-text ingredients">Lait de coco : </span>
                                <span class="card-text quantity">400ml</span>
                            </div>
                            <div>
                                <span class="card-text ingredients">Jus de citron : </span>
                                <span class="card-text quantity">2</span>
                            </div>
                            <div>
                                <span class="card-text ingredients">Crème de coco : </span>
                                <span class="card-text quantity">4 cuillères</span>
                            </div>
                            <div>
                                <span class="card-text ingredients">Sucre : </span>
                                <span class="card-text quantity">20g</span>
                            </div>
                            <div>
                                <span class="card-text ingredients">Glaçons : </span>
                                <span class="card-text quantity">2</span>
                            </div>
                        </div>

                        <!-- Description de la recette -->
                        <div class="col">
                            <p class="card-text">${description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return (article);
    }

    return { name, time, description, getRecipeCardDOM }
}