import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany} from 'typeorm';
import { JsModule } from './js-module.entity';
import { Question } from './question.entity';

@Entity('weeksOfModule')
export class WeekOfModule {

  @PrimaryGeneratedColumn('uuid')
  weekId: string;

  @Column()
  numberOfWeek: number;
  @ManyToOne(type => JsModule, module => module.week)
  module: JsModule;

  @OneToMany(type => Question, question => question.week)
  question: Question[];

}
