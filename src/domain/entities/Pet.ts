import { Entity } from '../Entity';

export type RegisteredAnimalKinds = 'cat' | 'dog'

export interface PetProps {
    name: string;
    kind: RegisteredAnimalKinds;
    birthDate: Date;
    weightInGrams: number;
    bipedHeightInCentimeters: number;
    quadrupedHeightInCentimeters: number;
    photoUrl: string;
}

export class Pet extends Entity<PetProps> {
    constructor(props: PetProps, id?: string) {
        super(props, id)
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        throw new Error('Method not implemented')
    }  
}
