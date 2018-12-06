import { Length, IsString } from 'class-validator';
export class UserLoginDTO {
  @Length(2, 20)
  @IsString()
  username: string;

  @IsString()
  password: string;
}