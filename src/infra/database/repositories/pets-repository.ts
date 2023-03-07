import { Pet } from "../../../domain/entities/Pet";

export interface PetsRepository {
    create(pet: Pet): Promise<void>
}