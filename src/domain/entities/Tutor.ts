import { Entity } from '../Entity';

export interface TutorProps {
    name: string;
    email: string;
    avatarUrl: string | null;
}

export class Tutor extends Entity<TutorProps> {
    constructor(props: TutorProps, id?: string) {
        super(props, id)
    }
}