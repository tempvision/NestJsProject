import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity({
  name: 'users',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column({default: false})
  isAdmin: boolean;

}
