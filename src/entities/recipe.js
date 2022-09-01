export class Recipe {
    #id;
    #title;
    #image;
    #totalPortions;
    #timeToPrepare;
    #ingredients;
    #howToPrepare;
    #authorId;

    constructor({ id, title, image, totalPortions, timeToPrepare, ingredients = [], howToPrepare, authorId }) {
        this.#id = id;
        this.#title = title;
        this.#image = image;
        this.#totalPortions = totalPortions;
        this.#timeToPrepare = timeToPrepare;
        this.#ingredients = new Set(ingredients);
        this.#howToPrepare = howToPrepare;
        this.#authorId = authorId;
    }

    get id() {
        return this.#id;
    }

    set id(id) {
        this.#id = id;
    }

    get title() {
        return this.#title;
    }

    set title(title) {
        this.#title = title;
    }

    get image() {
        return this.#image;
    }

    set image(image) {
        this.#image = image;
    }

    get totalPortions() {
        return this.#totalPortions;
    }

    set totalPortions(totalPortions) {
        this.#totalPortions = totalPortions;
    }

    get timeToPrepare() {
        return this.#timeToPrepare;
    }

    set timeToPrepare(timeToPrepare) {
        this.#timeToPrepare = timeToPrepare;
    }

    get ingredients() {
        return Array.from(this.#ingredients.values());
    }

    set ingredients(ingredients = []) {
        this.#ingredients = new Set(ingredients);
    }

    addIngredient(ingredient) {
        this.#ingredients.add(ingredient);
    }

    removeIngredient(ingredient) {
        this.#ingredients.delete(ingredient);
        this.#ingredients.delete(ingredient.id);
    }


    get howToPrepare() {
        return this.#howToPrepare;
    }

    set howToPrepare(howToPrepare) {
        this.#howToPrepare = howToPrepare;
    }

    get authorId() {
        return this.#authorId;
    }

    set authorId(authorId) {
        this.#authorId = authorId;
    }
}