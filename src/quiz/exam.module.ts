import { ExamController } from './exam.controller';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { CoreModule } from '../common/core/core.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { User } from '../data/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CoreModule, AuthModule],
  providers: [],
  exports: [],
  controllers: [ExamController],
})
export class UsersModule { }
