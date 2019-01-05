import { IsString, IsEmail } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UserRegisterDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}
