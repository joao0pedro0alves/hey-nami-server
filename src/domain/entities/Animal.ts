import { Entity } from '../Entity';

export type RegisteredAnimalKinds = 'cat' | 'dog'

export interface AnimalProps {
    name: string;
    kind: RegisteredAnimalKinds;
    monthsOld: number;
    weightInGrams: number;
    bipedHeightInCentimeters: number;
    quadrupedHeightInCentimeters: number;
    photoUrl: string;
}

export class Animal extends Entity<AnimalProps> {
    constructor(props: AnimalProps, id?: string) {
        super(props, id)
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        throw new Error('Method not implemented')
    }  
}
