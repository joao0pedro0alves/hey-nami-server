import { FamilyMember } from "../../../domain/entities/FamilyMember";

export interface FamilyMembersRepository {
    create(familyMember: FamilyMember): Promise<void>
}