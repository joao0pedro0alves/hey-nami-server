import { FastifyInstance } from "fastify";
import { createDiaryController } from "../../use-cases/create-diary";

export async function diaryRoutes(fastify: FastifyInstance) {
    fastify.post('/', (request, reply) => createDiaryController.handle(request, reply))
}