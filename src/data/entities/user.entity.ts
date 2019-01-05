import { Column, PrimaryGeneratedColumn, Entity, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { UserAnswer } from './user-answer.entity';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @Column('nvarchar')
  firstName: string;

  @Column('nvarchar')
  lastName: string;

  @Column({ default: false })
  isAdmin: boolean;

  @OneToMany(type => UserAnswer, userAnswer => userAnswer.user)
  userAnswer: UserAnswer[];

}
