import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { PartOfModule } from './part-of-module.entity';

@Entity('jsModule')
export class JsModule {
  @PrimaryGeneratedColumn()
  moduleId: number;

  @Column()
  moduleName: string;

  @Column()
  isActive: boolean;

  @OneToMany(type => PartOfModule, part => part.jsModule)
  partOfModule: PartOfModule[];
}
