import { JwtStrategy } from './auth/jwt.startegy';
import { UsersService } from './users.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'jwt' }),
  JwtModule.register({
    secretOrPrivateKey: 'secret',
    signOptions: {
    expiresIn: 3600, // Entirely optional
    },
  }),
],
  controllers: [AppController],
  providers: [AppService, JwtStrategy, UsersService, AuthService],
})
export class AppModule { }
