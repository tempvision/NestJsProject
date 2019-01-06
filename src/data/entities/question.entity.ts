import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, ManyToMany, JoinTable, OneToMany, JoinColumn } from 'typeorm';
import { PartOfModule } from './part-of-module.entity';
import { User } from './user.entity';
import { Answer } from './answer.entity';

@Entity('question')
export class Question {
  @PrimaryGeneratedColumn()
  questionId: number;

  @Column()
  question: string;

  @ManyToOne(type => PartOfModule, part => part.question)
  @JoinColumn({ name: 'fk_partId' })
  partOfModule: PartOfModule;

  @OneToMany(type => Answer, answer => answer.question)
  answer: Answer[];

}