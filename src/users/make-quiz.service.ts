import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository, TransactionManager, EntityManager, Transaction } from 'typeorm';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';

@Injectable()
export class QuizService {
    // missing implementation
    constructor(
        @InjectRepository(Quiz)
        private readonly quizRepository: Repository<Quiz>,

    ) { }

    async makeQuiz() {
        return this.quizRepository.find({});
    }
}
