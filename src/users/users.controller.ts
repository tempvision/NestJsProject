import { QuizService } from './make-quiz.service';
import { AdminGuard } from './../common/guards/roles/admin.guard';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards, HttpService } from '@nestjs/common';
import { UsersService } from './../common/core/users.service';
import { AuthService } from './../auth/auth.service';
import { Transaction, TransactionManager, EntityManager } from 'typeorm';
import { EQService } from './equalizer.service';

@Controller('users')
export class UsersController {

  constructor(
    private readonly usersService: UsersService,
    private readonly quizService: QuizService,
    private readonly equalizer: EQService,
  ) { }

  @Get()
  @UseGuards(AuthGuard(), AdminGuard)
  all() {
    return this.usersService.getAll();
  }

  @Get('make-quiz')
  makequiz() {
    return this.quizService.makeQuiz;
  }

  @Get('equalizer')
  showEQ() {
    return this.equalizer.showEQ;
  }
}
