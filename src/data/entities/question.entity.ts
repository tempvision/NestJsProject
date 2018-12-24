import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { WeekOfModule } from './week-of-module.entity';
import { User } from './user.entity';
import { Answer } from './answer.entity';
import { UserAnswer } from './user-answer.entity';

@Entity('question')
export class Question {

  @PrimaryGeneratedColumn('uuid')
  questionId: string;

  @Column()
  question: string;

  @ManyToOne(type => WeekOfModule, week => week.question)
  week: WeekOfModule;

  @OneToMany(type => Answer, answer => answer.question)
  answer: Answer[];

  @ManyToMany(type => UserAnswer)
  @JoinTable()
  userAnwser: UserAnswer[];

}