import { StringNormalize } from "../components/StringNormalize.js";
import { Cards } from "../components/cards.js";
import { Dropdown } from "../components/Dropdown.js";

export class DOMBuilder {
    constructor(recipesList) {
      this.sort = ["Ingrédients", "Appareils", "Ustensiles"];
      this.recipesList = recipesList;
    }

    // Active ou désactive les dropdowns
    toggleDropdown() {
      const dropIngredients = document.querySelector(".btn-drop-Ingrédients");
      const dropAppareils = document.querySelector(".btn-drop-Appareils");
      const dropUstensiles = document.querySelector(".btn-drop-Ustensiles");

      dropIngredients.addEventListener("click", () => {
        document.querySelector(".dropdown-Ingrédients").classList.toggle("active");
      })

      dropAppareils.addEventListener("click", () => {
        document.querySelector(".dropdown-Appareils").classList.toggle("active");
      })

      dropUstensiles.addEventListener("click", () => {
        document.querySelector(".dropdown-Ustensiles").classList.toggle("active");
      })
    }

    // Affiche les dropdowns
    displayDropdowns() {
      const dropContainer = document.querySelector(".dropdowns-container");

      dropContainer.innerHTML = ``;

      this.sort.forEach((el) => {
        if (el === "Ingrédients") {
          dropContainer.innerHTML += new Dropdown(this.recipesList.getAllIngredients(), el).dropdown;
        } else if (el === "Appareils") {
          dropContainer.innerHTML += new Dropdown(this.recipesList.getAllAppliances(), el).dropdown;
        } else {
          dropContainer.innerHTML += new Dropdown(this.recipesList.getAllUstensils(), el).dropdown;
        }
      });
      this.toggleDropdown();
    }
  
    // Affiche les recettes de la liste en parametre
    displayCards(recipesList) {
      const cardsContainer = document.getElementById("recipes");
  
      let htmlContent = ``;
      for (let i = 0; i < recipesList.length; i++) {
        htmlContent += new Cards(recipesList[i], i).card;
      }

      cardsContainer.innerHTML = htmlContent;
    }
}