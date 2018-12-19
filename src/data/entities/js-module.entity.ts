import { Column, PrimaryGeneratedColumn, Entity, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { WeekOfModule } from './week-of-module.entity';

@Entity('jsModule')
export class JsModule {

  @PrimaryGeneratedColumn('uuid')
  modileId: string;

  @Column()
  moduleName: string;

  @Column()
  isActive: boolean;

  @OneToMany(type => WeekOfModule, week => week.module)
  week: WeekOfModule[];

}
