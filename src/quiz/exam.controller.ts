import { AdminGuard } from '../common/guards/roles/admin.guard';
import { AuthGuard } from '@nestjs/passport';
import { Controller, Get, UseGuards, HttpService } from '@nestjs/common';
import { UsersService } from '../common/core/users.service';
import { AuthService } from '../auth/auth.service';
import { Transaction, TransactionManager, EntityManager } from 'typeorm';

@Controller('quiz')
export class ExamController {

  constructor(
    // private readonly usersService: UsersService,
  ) { }

  @Get('register')
  register() {
    // to be implemented
  }

  @Get('tryagain')
  tryAgain() {
    // to be implemented
  }
}
