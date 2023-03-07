import { Pet, PetProps } from "../Pet";

export class Dog extends Pet {
    constructor(props: Omit<PetProps, 'kind'>) {
        super({ ...props, kind: 'dog'});
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        return 2200
    }
}