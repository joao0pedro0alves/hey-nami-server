import { FastifyInstance } from "fastify";
import { diaryRoutes } from "./diary-routes";

export async function routes(fastify: FastifyInstance) {
    fastify.register(diaryRoutes, { prefix: '/diaries'})
}