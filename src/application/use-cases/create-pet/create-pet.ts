import { Pet, PetProps, RegisteredPetKinds } from '../../../domain/entities/Pet';
import { Cat } from '../../../domain/entities/pets/Cat';
import { Dog } from '../../../domain/entities/pets/Dog';
import { PetsRepository } from '../../../infra/database/repositories/pets-repository';

type CreatePetRequest = PetProps;
type CreatePetResponse = Pet;

const REGISTERED_PETS: Record<RegisteredPetKinds, typeof Pet> = {
    cat: Cat,
    dog: Dog,
}

export class CreatePet {
    constructor(private petsRepository: PetsRepository) {}

    async execute(props: CreatePetRequest): Promise<CreatePetResponse> {
        let pet: Pet;

        const PetConstructor = REGISTERED_PETS[props.kind]

        if (PetConstructor) {
            pet = new PetConstructor(props)

        } else {
            throw new Error('This pet kind is not available');
        }

        await this.petsRepository.create(pet);

        return pet;
    }
}
