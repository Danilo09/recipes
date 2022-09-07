import { Author } from '../entities/Author.js';
export class AuthorRepository {
    #lStorage;
    constructor(Storage) {
        this.#lStorage = new Storage('author');
    }

    async save(author) {
        const newAuthor = await this.#lStorage.save(author.toObject());
        return new Author(newAuthor)
    }

    async getById(id) {
        const author = await this.#lStorage.findOne(id);

        if (!author) {
            return null;
        }

        return new Author(author);
    }

    async getAll() {
        const authors = await this.#lStorage.findAll();
        return authors.map(author => new Author(author));
    }

    async update(author) {
        return this.#lStorage.findOneAndUpdate(author.id, author.toObject());
    }

    async remove(id) {
        return this.#lStorage.remove(id);
    }

    async removeAll() {
        return this.#lStorage.removeAll();
    }

}