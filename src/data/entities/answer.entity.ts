import { Column, PrimaryGeneratedColumn, Entity, PrimaryColumn, ManyToOne, OneToMany, JoinTable, JoinColumn } from 'typeorm';
import { Question } from './question.entity';

@Entity('answer')
export class Answer {
  @PrimaryGeneratedColumn()
  answerId: number;

  @Column()
  answerOptions: string;

  @Column()
  answerValue: number;

  @ManyToOne(type => Question, question => question.answer)
  @JoinColumn({name: 'fk_questionId' })
  question: Question;

}
