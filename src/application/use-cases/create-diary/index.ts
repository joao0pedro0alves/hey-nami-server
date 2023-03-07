import { PrismaDiariesRepository } from "../../../infra/database/repositories/prisma/prisma-diaries-repository";
import { CreateDiary } from "./create-diary";
import { CreateDiaryController } from "./create-diary-controller";

const diariesRepository = new PrismaDiariesRepository()

const createDiary = new CreateDiary(diariesRepository)
const createDiaryController = new CreateDiaryController(createDiary)

export { createDiary, createDiaryController }