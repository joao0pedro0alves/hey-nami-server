import { describe, expect, it } from "vitest";
import { Diary } from "../../../domain/entities/Diary";
import { InMemoryDiariesRepository } from "../../../infra/database/repositories/in-memory/in-memory-diaries-repository";
import { InMemoryFamilyMembersRepository } from "../../../infra/database/repositories/in-memory/in-memory-family-members-repository";
import { CreateFamilyMember } from "../create-family-member/create-family-member";
import { CreateDiary } from "./create-diary";

describe('Create diary', () => {
    it('should be able to create a diary', async () => {

        const diariesRepository = new InMemoryDiariesRepository()
        const familyMembersRepository = new InMemoryFamilyMembersRepository()

        const createDiary = new CreateDiary(diariesRepository)
        const createFamilyMember = new CreateFamilyMember(familyMembersRepository)

        const owner = await createFamilyMember.execute({
            avatarUrl: null,
            email: 'jhon@doe.com',
            name: 'Jhon Doe'
        })

        const diary = await createDiary.execute({
            owner,
            family: [],
            pets: []
        })

        expect(diary).toBeInstanceOf(Diary)
    })
})