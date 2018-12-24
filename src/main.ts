import { QuizService } from './quiz/quiz.service';
import { ConfigService } from './config/config.service';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as multer from 'multer';
import { join } from 'path';
import * as cors from 'cors';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  await app.listen(app.get(ConfigService).port);
}
// asdf
bootstrap();
