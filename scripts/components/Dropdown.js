export class Dropdown {
    constructor(dropList, type) {
        this.dropList = dropList;
        this.type = type;
    }

    // Ajoute chaque item sous forme de liste

    listDropdown() {
        let htmlContent = ``;
        let v = 0;

        for (let item of this.dropList) {
            let li = document.createElement("li");

            li = `
                <li class="items items-${this.type}" id="item-${v}">${item}</li>
            `;

            htmlContent += li;
            v++;
        }
        return htmlContent;
    }

    // Construit les boutons dropdown

    get dropdown() {
        return `
            <div class="dropdown dropdown-${this.type}">
                <h3>${this.type}</h3>
                <input type="text" class="input" id="input-${this.type}" placeholder="Rechercher un ${this.type}">
                <button class="btn-drop btn-drop-${this.type}">
                    <i class="icone fas fa-chevron-down"></i>
                </button>
                <ul class="list list-${this.type}">${this.listDropdown()}</ul>
            </div>
        `;
    }
}