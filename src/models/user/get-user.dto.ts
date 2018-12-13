import { IsString, Length, Matches, IsOptional, IsEmail } from 'class-validator';

export class GetUserDTO {

  firstName: string;

  email: string;

  password: string;

  isAdmin: boolean;
}
