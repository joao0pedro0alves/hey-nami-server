import { describe, expect, it } from "vitest";
import { FamilyMember } from "../../../domain/entities/FamilyMember";
import { InMemoryFamilyMembersRepository } from "../../../infra/database/repositories/in-memory/in-memory-family-members-repository";
import { CreateFamilyMember } from "./create-family-member";

describe('Create Fmily Member', () => {
    it('should be able to create a family member', () => {

        const familyMembersRepository = new InMemoryFamilyMembersRepository()
        const createFamilyMember = new CreateFamilyMember(familyMembersRepository)

        expect(
            createFamilyMember.execute({
                email: 'jhon@doe.com',
                name: 'Jhon Doe'
            })
        ).resolves.toBeInstanceOf(FamilyMember)
    })
})