import { User } from '../entities/User.js';
export class UserRepository {
    #lStorage;
    constructor(Storage) {
        this.#lStorage = new Storage('user');
    }

    async save(user) {
        const newUser = await this.#lStorage.save(user.toObject());
        return new User(newUser)
    }

    async getById(id) {
        const user = await this.#lStorage.findOne(id);

        if (!user) {
            return null;
        }

        return new User(user);
    }

    async getAll() {
        const users = await this.#lStorage.findAll();
        return users.map(user => new User(user));
    }

    async update(user) {
        return this.#lStorage.findOneAndUpdate(user.id, user.toObject());
    }

    async remove(id) {
        return this.#lStorage.remove(id);
    }

    async removeAll() {
        return this.#lStorage.removeAll();
    }

}