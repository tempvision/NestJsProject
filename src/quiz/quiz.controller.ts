import { Question } from './../data/entities/question.entity';
import { AnsService } from './ans.service';
import { QuizService } from './quiz.service';
import { AdminGuard } from '../common/guards/roles/admin.guard';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards, HttpService } from '@nestjs/common';
import { UsersService } from '../common/core/users.service';
import { AuthService } from '../auth/auth.service';
import { get } from 'https';

@Controller('quiz')
export class QuizController {

  constructor(
    private readonly quizService: QuizService,
    private readonly ansService: AnsService,
  ) { }

  private questions = this.quizService.getQuestions();
  private answers = this.ansService.getAns();

  @Get()
  getQuiz() {
    return this.answers, this.questions;
  }

}
