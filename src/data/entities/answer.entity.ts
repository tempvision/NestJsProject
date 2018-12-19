import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';
import { Question } from './question.entity';
import { UserAnswer } from './user-answer.entity';

@Entity('answer')
export class Answer {
  @PrimaryColumn('uuid')
  answeId: string;

  @Column()
  typeAnswer: string;

  @Column()
  answerValue: number;

  @ManyToOne(type => Question, question => question.answer)
  question: Question;

  @OneToMany(type => UserAnswer, userAnswer => userAnswer.answer)
  userAnswer: UserAnswer[];
}
