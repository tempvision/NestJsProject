import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { CoreModule } from '../common/core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../data/entities/user.entity';
import { UsersController } from './exam.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CoreModule, AuthModule],
  providers: [],
  exports: [],
  controllers: [QuizController],
})
export class UsersModule {}
