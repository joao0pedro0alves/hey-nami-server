import { expect, test } from "vitest";
import { Diary } from "./Diary";
import { FamilyMember } from "./FamilyMember";

test('create a Diary', () => {

    const diaryOwner = new FamilyMember({
        email: 'jhon@doe@gmail.com',
        name: 'Jhon Doe'
    })

    const diary = new Diary({
        owner: diaryOwner,
    })
    
    expect(diary).toBeInstanceOf(Diary)
})