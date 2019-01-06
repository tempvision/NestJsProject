import { InjectRepository } from "@nestjs/typeorm";
import { Injectable, BadRequestException } from "@nestjs/common";
import { Repository } from "typeorm";
import { Answer } from "src/data/entities/answer.entity";

@Injectable()
export class AnsService {
    constructor(
        @InjectRepository(Answer)
        private readonly ansRepo: Repository<Answer>,

    ) { }

    async getAns(options?: any): Promise<Array<Answer>> {
        const ans = await this.ansRepo.find({});

        if (ans) {
            return ans;
        }

        else { throw new BadRequestException('NiceTryBro'); }
    }

}
