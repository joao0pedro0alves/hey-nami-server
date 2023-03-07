import { FamilyMember } from "../../../../domain/entities/FamilyMember";
import { FamilyMembersRepository } from "../family-members-repository";

export class InMemoryFamilyMembersRepository implements FamilyMembersRepository {
    public items: FamilyMember[] = []

    async create(familyMember: FamilyMember): Promise<void> {
        this.items.push(familyMember)
    }
}