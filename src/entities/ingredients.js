export class Ingredients {
    #id;
    #name;
    #recipeId;

    constructor({ id, name, recipeId }) {
        this.#id = id;
        this.#name = name;
        this.#recipeId = recipeId;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get recipeId() {
        return this.#recipeId;
    }

    set recipeId(recipeId) {
        this.#recipeId = recipeId;
    }
}