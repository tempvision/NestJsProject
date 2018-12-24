import { Question } from './../data/entities/question.entity';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository, TransactionManager, EntityManager, Transaction } from 'typeorm';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class QuizService {
    constructor(
        @InjectRepository(Question)
        private readonly quizRepository: Repository<Question>,

    ) { }

    async getQuestions(options?: any): Promise<Array<Question>> {
        const quiz = await this.quizRepository.find({});

        if (quiz) {
            return quiz;
        }

        else { throw new BadRequestException('NiceTryBro'); }
    }

}
