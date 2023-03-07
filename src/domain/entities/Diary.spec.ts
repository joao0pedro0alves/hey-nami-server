import { expect, test } from "vitest";
import { Cat } from "./animals/Cat";
import { Dog } from "./animals/Dog";
import { Diary } from "./Diary";
import { Tutor } from "./Tutor";

test('create a Diary', () => {

    const diaryOwner = new Tutor({
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
    expect(diary.owner).toBeInstanceOf(Tutor)
    expect(diary.owner.props.name).toEqual('Jhon Doe')

    expect(diary.family.length).toEqual(1)
    expect(diary.pets.length).toEqual(2)

    expect(diary.pets[0].props.name).toEqual('Marvin')
})