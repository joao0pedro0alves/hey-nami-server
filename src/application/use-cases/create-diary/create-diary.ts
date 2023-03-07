import { Diary, DiaryProps } from "../../../domain/entities/Diary"
import { DiariesRepository } from "../../../infra/database/repositories/diaries-repository"

type CreateDiaryRequest = Omit<DiaryProps, 'createdAt'>
type CreateDiaryResponse = Diary

export class CreateDiary {
     constructor(private diariesRepository: DiariesRepository) {}

     async execute({ owner, family, pets }: CreateDiaryRequest): Promise<CreateDiaryResponse> {

        const diary = new Diary({
            owner,
            family,
            pets,
        })

        await this.diariesRepository.create(diary)

        return diary
     }
}