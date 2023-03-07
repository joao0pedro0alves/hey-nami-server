import { InMemoryPetsRepository } from "../../../infra/database/repositories/in-memory/in-memory-pets-repository";
import { CreatePet } from "./create-pet";

const petsRepository = new InMemoryPetsRepository()
const createPet = new CreatePet(petsRepository)

export { createPet }