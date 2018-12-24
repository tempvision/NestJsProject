import { QuizController } from './quiz.controller';
import { Question } from './../data/entities/question.entity';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { CoreModule } from '../common/core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Module({
  imports: [TypeOrmModule.forFeature([Question]), CoreModule, AuthModule],
  providers: [QuizService],
  exports: [],
  controllers: [QuizController],
})
export class QuizModule {
  constructor(private readonly quizService: QuizService) { }
}
