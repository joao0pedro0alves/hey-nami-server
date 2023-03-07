import { Diary } from "../../../../domain/entities/Diary";
import { DiariesRepository } from "../diaries-repository";

export class InMemoryDiariesRepository implements DiariesRepository {
    public items: Diary[] = []

    async create(diary: Diary): Promise<void> {
        this.items.push(diary)
    }
    
}