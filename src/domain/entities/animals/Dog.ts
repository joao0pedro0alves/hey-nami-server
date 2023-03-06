import { Animal, AnimalProps } from "../Animal";

export class Dog extends Animal {
    constructor(props: Omit<AnimalProps, 'kind'>) {
        super({ ...props, kind: 'dog'});
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        return 2200
    }
}