import { FastifyReply, FastifyRequest } from 'fastify';
import { CreateDiary } from './create-diary';
import { FamilyMember } from '../../../domain/entities/FamilyMember';

export class CreateDiaryController {
    constructor(private createDiaryUseCase: CreateDiary) {}

    async handle(request: FastifyRequest, reply: FastifyReply): Promise<FastifyReply> {
    
        const owner = new FamilyMember({
            avatarUrl: null,
            email: 'jhon@doe.com',
            name: 'Jhon Doe',
        });

        await this.createDiaryUseCase.execute({
            owner,
            family: [],
            pets: [],
        });

        return reply.status(201).send();
    }
}
