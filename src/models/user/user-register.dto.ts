import { IsString, Length, Matches, IsOptional, IsEmail } from 'class-validator';

export class UserRegisterDTO {

  @IsEmail()
  email: string;

  @IsString()
  @Matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/)
  password: string;

}
