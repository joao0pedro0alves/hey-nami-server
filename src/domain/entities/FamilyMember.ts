import { Entity } from '../Entity';

export interface FamilyMemberProps {
    name: string;
    email: string;
    avatarUrl: string | null;
}

export class FamilyMember extends Entity<FamilyMemberProps> {
    constructor(props: FamilyMemberProps, id?: string) {
        super(props, id)
    }
}