import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Answer } from './answer.entity';

@Entity({
  name: 'userAnswer',
})
export class UserAnswer {

  @PrimaryGeneratedColumn('uuid')
  userAnswerId: string;

  @ManyToOne(type => User, user => user.userAnswer)
  user: User;

  @ManyToOne(type => Answer, answer => answer.userAnswer)
  answer: Answer;

}