import { Diary, DiaryProps } from "../../../domain/entities/Diary"
import { DiariesRepository } from "../../../infra/database/repositories/diaries-repository"

type CreateDiaryRequest = {
    owner: DiaryProps['owner']
}

type CreateDiaryResponse = Diary

export class CreateDiary {
     constructor(private diariesRepository: DiariesRepository) {}

     async execute({ owner }: CreateDiaryRequest): Promise<CreateDiaryResponse> {

        const diary = new Diary({ owner })

        await this.diariesRepository.create(diary)

        return diary
     }
}