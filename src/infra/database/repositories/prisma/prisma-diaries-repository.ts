import { Diary } from "../../../../domain/entities/Diary";
import { prisma } from "../../../../lib/prisma";
import { DiariesRepository } from "../diaries-repository";

export class PrismaDiariesRepository implements DiariesRepository {

    async create({ owner }: Diary): Promise<void> {
        await prisma.diary.create({
            data: {
                family: {
                    create: {
                        email: owner.props.email,
                        name: owner.props.name,
                    }
                }
            }
        })
    }   
    
}