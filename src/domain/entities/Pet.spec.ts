import { expect, test } from 'vitest';
import { Pet } from './Pet';

test('create an Animal', () => {
    const animal = new Pet({
        name: 'Nami',
        kind: 'cat',
        birthDate: new Date(),
        weightInGrams: 300,
        bipedHeightInCentimeters: 40,
        quadrupedHeightInCentimeters: 20,
        photoUrl: '',
    });

    expect(animal).toBeInstanceOf(Pet);
    expect(animal.props.kind).toEqual('cat');
    
    expect(animal.calculateMonthlyFeedConsumptionImGrams).toThrow();
});
