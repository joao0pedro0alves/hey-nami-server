import { describe, expect, it } from "vitest";
import { Cat } from "../../../domain/entities/pets/Cat";
import { InMemoryPetsRepository } from "../../../infra/database/repositories/in-memory/in-memory-pets-repository";
import { CreatePet } from "./create-pet";

describe('Create pet', () => {
    it('should be able to create a Cat', () => {

        const petsRepository = new InMemoryPetsRepository()
        const createPet = new CreatePet(petsRepository)

        expect(
            createPet.execute({
                name: 'Nami',
                kind: 'cat',
                birthDate: new Date(),
                weightInGrams: 300,
                bipedHeightInCentimeters: 40,
                quadrupedHeightInCentimeters: 20,
                photoUrl: '',
            })
        ).resolves.toBeInstanceOf(Cat)
    })
})