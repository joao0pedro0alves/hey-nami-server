import { expect, test } from 'vitest';
import { Tutor } from './Tutor';

test('create a Tutor', () => {
    const tutor = new Tutor({
        name: 'Jhon Doe',
        avatarUrl: 'https://jhon-doe.com/avatar.png',
        email: 'jhon@doe.com'
    });

    expect(tutor).toBeInstanceOf(Tutor);
});
