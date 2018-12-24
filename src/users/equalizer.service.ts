import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Repository, TransactionManager, EntityManager, Transaction } from 'typeorm';
import { InjectRepository, InjectEntityManager } from '@nestjs/typeorm';

import * as bcrypt from 'bcrypt';
import { validate } from 'class-validator';

@Injectable()
export class EQService {
    // missing implementation
    constructor(
        @InjectRepository(EQ)
        private readonly results: Repository<Results>,

    ) { }

    async showEQ() {
        return this.results.find({});
    }
}
