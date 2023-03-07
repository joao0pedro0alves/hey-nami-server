import { expect, test } from "vitest";
import { Cat } from "./pets/Cat";
import { Dog } from "./pets/Dog";
import { Diary } from "./Diary";
import { FamilyMember } from "./FamilyMember";

test('create a Diary', () => {

    const diaryOwner = new FamilyMember({
        avatarUrl: null,
        email: 'jhon@doe@gmail.com',
        name: 'Jhon Doe'
    })

    const marvin = new Dog({
        name: 'Marvin',
        photoUrl: '',
        bipedHeightInCentimeters: 120,
        quadrupedHeightInCentimeters: 60,
        birthDate: new Date(),
        weightInGrams: 20000
    })

    const nami = new Cat({
        name: 'Nami',
        photoUrl: '',
        bipedHeightInCentimeters: 30,
        quadrupedHeightInCentimeters: 15,
        birthDate: new Date(),
        weightInGrams: 4000
    })

    const diary = new Diary({
        owner: diaryOwner,
        family: [],
        pets: [marvin, nami],
    })

    expect(diary).toBeInstanceOf(Diary)
    expect(diary.owner).toBeInstanceOf(FamilyMember)
    expect(diary.owner.props.name).toEqual('Jhon Doe')

    expect(diary.family.length).toEqual(1)
    expect(diary.pets.length).toEqual(2)

    expect(diary.pets[0].props.name).toEqual('Marvin')
})