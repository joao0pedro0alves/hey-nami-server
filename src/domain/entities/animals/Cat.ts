import { Animal, AnimalProps } from "../Animal";

export class Cat extends Animal {
    constructor(props: Omit<AnimalProps, 'kind'>) {
        super({ ...props, kind: 'cat'});
    }

    calculateMonthlyFeedConsumptionImGrams(): number {
        return 1200
    }
}