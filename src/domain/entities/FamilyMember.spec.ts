import { expect, test } from 'vitest';
import { FamilyMember } from './FamilyMember';

test('create a Family member', () => {
    const familyMember = new FamilyMember({
        name: 'Jhon Doe',
        avatarUrl: 'https://jhon-doe.com/avatar.png',
        email: 'jhon@doe.com'
    });

    expect(familyMember).toBeInstanceOf(FamilyMember);
});
