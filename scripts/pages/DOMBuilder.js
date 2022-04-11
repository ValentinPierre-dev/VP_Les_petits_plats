import { StringNormalize } from "../components/StringNormalize.js";
import { Cards } from "../components/cards.js";
import { Dropdown } from "../components/Dropdown.js";

export class DOMBuilder {
    constructor(recipesList) {
      this.sort = ["Ingrédients", "Appareils", "Ustensiles"];
      this.recipesList = recipesList;
      this.tagSelected = [];
    }

    getUserRequest() {
      const inputIngr = document.getElementById("input-Ingrédients");
      const inputApp = document.getElementById("input-Appareils");
      const inputUst = document.getElementById("input-Ustensiles");

      return {
        tags: this.tagSelected,
        inputIngredients: inputIngr.value.trim(),
        inputAppareils: inputApp.value.trim(),
        inputUstensiles: inputUst.value.trim()
      };
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

    sortItem(list, input, ul) {
      let sortedList = [];

      for (let i = 0; i < list.length; i++) {
        if (StringNormalize.normalizeAccents(list[i].innerHTML).includes(StringNormalize.normalizeAccents(input))) {
          sortedList.push(list[i]);
        }
      }

      if (input.length > 0) {
        ul.innerHTML = "";
        for (let i = 0; i < sortedList.length; i++) {
          ul.append(sortedList[i]);
        }
      } else {
        ul.innerHTML = "";
        for (let i = 0; i < list.length; i++) {
          ul.append(list[i]);
        }
      }
    }

    // Active ou désactive les dropdowns
    toggleDropdown() {
      let allLiIngr = document.querySelectorAll(".items-Ingrédients");
      let ulIngr = document.querySelector(".list-Ingrédients");
      let allLiApp = document.querySelectorAll(".items-Appareils");
      let ulApp = document.querySelector(".list-Appareils");
      let allLiUst = document.querySelectorAll(".items-Ustensiles");
      let ulUst = document.querySelector(".list-Ustensiles");

      const dropIngredients = document.querySelector(".btn-drop-Ingrédients");
      const dropAppareils = document.querySelector(".btn-drop-Appareils");
      const dropUstensiles = document.querySelector(".btn-drop-Ustensiles");

      const inputIngr = document.getElementById("input-Ingrédients");
      const inputApp = document.getElementById("input-Appareils");
      const inputUst = document.getElementById("input-Ustensiles");

      inputIngr.addEventListener("input", (e) => {
        this.sortItem(allLiIngr, this.getUserRequest().inputIngredients, ulIngr);
      });

      inputApp.addEventListener("input", (e) => {
        this.sortItem(allLiApp, this.getUserRequest().inputAppareils, ulApp);
      });

      inputUst.addEventListener("input", (e) => {
        this.sortItem(allLiUst, this.getUserRequest().inputUstensiles, ulUst);
      });

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

    // Crée et affiche les tags
    itemsListener() {
      let itemsIngr = document.querySelectorAll(".items-Ingrédients");
      let itemsApp = document.querySelectorAll(".items-Appareils");
      let itemsUst = document.querySelectorAll(".items-Ustensiles");
      let tagsContainer = document.querySelector(".tags-container");

      for (let i = 0; i < itemsIngr.length; i++) {
        itemsIngr[i].addEventListener("click", () => {
          let tag = `
            <div class="tag ingredients anim" id="${itemsIngr[i].id}">
              <p class="tag-text">${itemsIngr[i].innerHTML}</p>
              <button class ="close" id="ingredient-${i}">
                <i class="far fa-times-circle close-tag"></i>
              </button>
            </div>
          `;

          this.getUserRequest().tags.push(StringNormalize.normalizeAccents(itemsIngr[i].innerHTML));

          tagsContainer.innerHTML += tag;

          const anim = document.getElementsByClassName("anim");
          Array.from(anim).forEach((e) => e.addEventListener("animationend", function() {
            this.classList.remove("anim");
          }))

          this.displayCards(this.recipesList.searchByTags(this.getUserRequest()));
          this.displayDropdowns();
        });
      }

      for (let i = 0; i < itemsApp.length; i++) {
        itemsApp[i].addEventListener("click", () => {
          let tag = `
            <div class="tag appareils anim" id="${itemsApp[i].id}">
              <p class="tag-text">${itemsApp[i].innerHTML}</p>
              <button class ="close" id="appareils-${i}">
                <i class="far fa-times-circle close-tag"></i>
              </button>
            </div>
          `;

          this.getUserRequest().tags.push(StringNormalize.normalizeAccents(itemsApp[i].innerHTML));

          tagsContainer.innerHTML += tag;

          const anim = document.getElementsByClassName("anim");
          Array.from(anim).forEach((e) => e.addEventListener("animationend", function() {
            this.classList.remove("anim");
          }))

          this.displayCards(this.recipesList.searchByTags(this.getUserRequest()));
          this.displayDropdowns();
        });
      }

      for (let i = 0; i < itemsUst.length; i++) {
        itemsUst[i].addEventListener("click", () => {
          let tag = `
            <div class="tag ustensiles anim" id="${itemsUst[i].id}">
              <p class="tag-text">${itemsUst[i].innerHTML}</p>
              <button class ="close" id="ustensiles-${i}">
                <i class="far fa-times-circle close-tag"></i>
              </button>
            </div>
          `;

          this.getUserRequest().tags.push(StringNormalize.normalizeAccents(itemsUst[i].innerHTML));

          tagsContainer.innerHTML += tag;

          const anim = document.getElementsByClassName("anim");
          Array.from(anim).forEach((e) => e.addEventListener("animationend", function() {
            this.classList.remove("anim");
          }))

          this.displayCards(this.recipesList.searchByTags(this.getUserRequest()));
          this.displayDropdowns();
        });
      }
    }

    // Ecoute les tags sélectionnés et affiche les recettes recherchées
    listenerDrop() {
      if (this.getUserRequest().tags.length > 0) {
        this.displayCards(this.recipesList.searchByTags(this.getUserRequest()));
      } else {
        this.displayCards(this.recipesList.getAllRecipes());
      }
    }

    // Ferme les tags
    closeTags() {
      let request = this.getUserRequest().tags;
      let tags = document.querySelectorAll(".tag");

      tags.forEach((tag) => tag.addEventListener('click', () => {
        for (let i = 0; i < request.length; i++) {
          
          if (StringNormalize.normalizeAccents(tag.children[0].innerText).includes(request[i])) {
            request.splice(i);
            this.getUserRequest().tags = request;
            console.log(this.getUserRequest().tags);
          }
        }
        this.displayCards(this.recipesList.getAllRecipes());
        this.listenerDrop();
        this.displayDropdowns();
      }))

      tags.forEach((tag) => tag.addEventListener("click", function() {
        this.classList.add("remove");
        const removeTag = document.getElementsByClassName("remove");
        Array.from(removeTag).forEach((e) => e.addEventListener("animationend", function() {
          this.remove()
        }))
      }))
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
      this.itemsListener();
      this.closeTags();
    }

    displayPage() {
      this.displayDropdowns();
      this.listenerDrop();
    }
}