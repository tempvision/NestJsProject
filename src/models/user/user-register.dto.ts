import { IsString, IsEmail } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UserRegisterDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @Optional()
  firstName: string;

  @IsString()
  @Optional()
  lastName: string;
}
