import { Pet } from "../../../../domain/entities/Pet";
import { PetsRepository } from "../pets-repository";

export class InMemoryPetsRepository implements PetsRepository {
    public items: Pet[] = [];

    async create(pet: Pet): Promise<void> {
        this.items.push(pet)
    }
}