import { prisma } from "../../prisma";
import { IFeedbacksRepository, IFeedbackCreateDTO } from "../IFeedbackRepository";

export class PrismaFeedbacksRepository implements IFeedbacksRepository {
    async create({ type, comment, screenshot }: IFeedbackCreateDTO) {
    await prisma.feedback.create({
        data: {
            type,
            comment,
            screenshot,
        }
    });
}

}