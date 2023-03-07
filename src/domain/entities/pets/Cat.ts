import { Pet, PetProps } from "../Pet";

export class Cat extends Pet {
    constructor(props: Omit<PetProps, 'kind'>) {
        super({ ...props, kind: 'cat'});
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        return 1200
    }
}