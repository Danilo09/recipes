import { User } from '../entities/User.js';
export class UserRepository {
    #lStorage;
    constructor(Storage) {
        this.#lStorage = new Storage('user');
    }

    async save(data) {
        const user = await this.#lStorage.save(data);
        return new User(user)
    }
}