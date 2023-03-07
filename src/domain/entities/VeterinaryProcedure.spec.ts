import { expect, test } from "vitest";
import { VeterinaryProcedure } from './VeterinaryProcedure';

test('create a Veterinary Procedure', () => {
    const veterinaryProcedure = new VeterinaryProcedure({
        title: 'Vermifogo',
        kind: 'medicine',
        description: 'Comprimido usado para tratar e prevenir doenças causadas por vermes.',
    })

    expect(veterinaryProcedure).toBeInstanceOf(VeterinaryProcedure)
})