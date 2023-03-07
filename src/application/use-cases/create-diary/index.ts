import { InMemoryDiariesRepository } from "../../../infra/database/repositories/in-memory/in-memory-diaries-repository";
import { CreateDiary } from "./create-diary";
import { CreateDiaryController } from "./create-diary-controller";

const diariesRepository = new InMemoryDiariesRepository()

const createDiary = new CreateDiary(diariesRepository)
const createDiaryController = new CreateDiaryController(createDiary)

export { createDiary, createDiaryController }