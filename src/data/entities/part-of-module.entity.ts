import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, OneToMany, JoinColumn} from 'typeorm';
import { JsModule } from './js-module.entity';
import { Question } from './question.entity';

@Entity('partOfModule')
export class PartOfModule {
  @PrimaryGeneratedColumn()
  partId: number;

  @Column()
  partName: string;
  @ManyToOne(type => JsModule, module => module.partOfModule)
  @JoinColumn({ name: 'fk_moduleId' })
  jsModule: JsModule;

  @OneToMany(type => Question, question => question.partOfModule)
  question: Question[];
}
