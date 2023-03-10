import { FamilyMember, FamilyMemberProps } from '../../../domain/entities/FamilyMember';
import { FamilyMembersRepository } from '../../../infra/database/repositories/family-members-repository';

type CreateFamilyMemberRequest = FamilyMemberProps;
type CreateFamilyMemberResponse = FamilyMember;

export class CreateFamilyMember {
    constructor(private familyMembersRepository: FamilyMembersRepository) {}

    async execute({
        name,
        email,
    }: CreateFamilyMemberRequest): Promise<CreateFamilyMemberResponse> {
        const familyMember = new FamilyMember({ name, email });

        await this.familyMembersRepository.create(familyMember)

        return familyMember;
    }
}