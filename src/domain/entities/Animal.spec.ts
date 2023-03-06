import { expect, test } from 'vitest';
import { Animal } from './Animal';

test('create an Animal', () => {
    const animal = new Animal({
        name: 'Nami',
        kind: 'cat',
        monthsOld: 6,
        weightInGrams: 300,
        bipedHeightInCentimeters: 40,
        quadrupedHeightInCentimeters: 20,
        photoUrl: '',
    });

    expect(animal).toBeInstanceOf(Animal);
    expect(animal.props.kind).toEqual('cat');
    
    expect(animal.calculateMonthlyFeedConsumptionImGrams).toThrow();
});
