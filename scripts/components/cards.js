export class Cards {
    constructor(recipe) {
        this.recipe = recipe;
    }

    //Met en place les quantités et unités des ingrédients
  
    ingredientsContents() {
        let htmlContent = ``;
        for (let ingredient of this.recipe.ingredients) {
            let li = document.createElement("li");
            li.classList.add("ingredient-item");
  
            if (ingredient.quantity != undefined) {
                li = `
                    <li class = "ingredient-item"><span class="ingredient-style">${ingredient.ingredient} : </span> ${ingredient.quantity}</li>
                `;
            } else {
                li = `
                    <li  class = "ingredient-item"><span class="ingredient-style">${ingredient.ingredient}</span></li>
                `;
            }

            if (ingredient.unit != undefined && ingredient.quantity != undefined) {
                li = `
                    <li  class = "ingredient-item"><span class="ingredient-style">${ingredient.ingredient} : </span> ${ingredient.quantity} ${ingredient.unit}</li>
                `;
            }

            if (window.innerWidth < 600) {
                li = `
                    <li  class = "ingredient-item"><span class="ingredient-style">${ingredient.ingredient}</span></li>
                `;
            }
  
            htmlContent += li;
        }
        return htmlContent;
    }
  
    // Construit la card

    get card() {

        let nbchar = this.recipe.description.length;
        let desc = this.recipe.description;

        if (nbchar > 230) {
            desc = this.recipe.description.substr(0, 230)+"...";
        } else {
            desc = this.recipe.description;
        }

        if ( nbchar > 135 && window.innerWidth < 600){
            desc = this.recipe.description.substr(0, 135)+"...";
        }

        return `
            <!-- Card d'une recette -->
            <div class="col">
                <div class="card">

                    <!-- Image de la card -->
                    <img src="./images/assets/${this.recipe.photo}" class="card-img-top" alt="${this.recipe.name}"/>

                    <!-- Corps de la card -->
                    <div class="card-body">

                        <!-- En-tête titre et temps -->
                        <div class="d-flex justify-content-between">
                            <h3 class="card-title">${this.recipe.name}</h3>
                            <div class="d-flex align-items-baseline time">
                                <i class="far fa-clock"></i>
                                <p>${this.recipe.time} min</p>
                            </div>
                        </div>

                        <div class="row">

                            <!-- Liste des ingrédients -->
                            <ul class="col ingredient-list">
                                ${this.ingredientsContents()}
                            </ul>

                            <!-- Description de la recette -->
                            <div class="col">
                                <p class="card-text recipe-desc">${desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}