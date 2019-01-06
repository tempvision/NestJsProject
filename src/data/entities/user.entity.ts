import { Column, PrimaryGeneratedColumn, Entity, OneToMany, JoinTable, ManyToMany } from 'typeorm';
import { IsEmail } from 'class-validator';
import { Question } from './question.entity';
import { Answer } from './answer.entity';

@Entity('user')
export class User {

  @PrimaryGeneratedColumn()
  userId: number;

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

  @ManyToMany(type => Answer)
  @JoinTable({name: 'UsersAnswers'})
  answer: Answer[];

}
