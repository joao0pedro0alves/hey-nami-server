import { Diary } from "../../../domain/entities/Diary";

export interface DiariesRepository {
    create(diary: Diary): Promise<void>;
}