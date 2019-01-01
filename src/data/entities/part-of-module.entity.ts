import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany} from 'typeorm';
import { JsModule } from './js-module.entity';
import { Question } from './question.entity';

@Entity('partOfModule')
export class PartOfModule {
  @PrimaryGeneratedColumn('uuid')
  partId: string;

  @Column()
  partName: string;
  @ManyToOne(type => JsModule, module => module.partOfModule)
  jsModule: JsModule;

  @OneToMany(type => Question, question => question.partOfModule)
  question: Question[];
}
