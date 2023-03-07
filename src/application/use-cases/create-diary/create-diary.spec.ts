import { describe, expect, it } from "vitest";
import { Diary } from "../../../domain/entities/Diary";
import { InMemoryDiariesRepository } from "../../../infra/database/repositories/in-memory/in-memory-diaries-repository";
import { InMemoryFamilyMembersRepository } from "../../../infra/database/repositories/in-memory/in-memory-family-members-repository";
import { InMemoryPetsRepository } from "../../../infra/database/repositories/in-memory/in-memory-pets-repository";
import { CreateFamilyMember } from "../create-family-member/create-family-member";
import { CreatePet } from "../create-pet/create-pet";
import { CreateDiary } from "./create-diary";

describe('Create diary', () => {
    it('should be able to create a diary', async () => {

        const diariesRepository = new InMemoryDiariesRepository()
        const familyMembersRepository = new InMemoryFamilyMembersRepository()
        const petsRepository = new InMemoryPetsRepository()

        const createDiary = new CreateDiary(diariesRepository)
        const createFamilyMember = new CreateFamilyMember(familyMembersRepository)
        const createPet = new CreatePet(petsRepository)

        const owner = await createFamilyMember.execute({
            avatarUrl: null,
            email: 'jhon@doe.com',
            name: 'Jhon Doe'
        })

        const sister = await createFamilyMember.execute({
            avatarUrl: null,
            email: 'mary@cait.com',
            name: 'Mary Cait'
        })

        const cat = await createPet.execute({
            name: 'Nami',
            kind: 'cat',
            birthDate: new Date(),
            weightInGrams: 300,
            bipedHeightInCentimeters: 40,
            quadrupedHeightInCentimeters: 20,
            photoUrl: '',
        })

        const diary = await createDiary.execute({
            owner,
            family: [sister],
            pets: [cat]
        })

        expect(diary).toBeInstanceOf(Diary)
    })
})