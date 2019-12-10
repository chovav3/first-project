import { App } from '../app.model';
import { Entity, OneToMany } from 'typeorm';
import { SpecScreenRole } from '../spec-screen-role/spec-screen-role.model';

@Entity()
export class SpecScreenDesc extends App{
  // @OneToMany(typeFunctionOrTarget, inverseSide)
  children?: Array<SpecScreenDesc>
  parent?: SpecScreenDesc
roles?: Array<SpecScreenRole | SpecScreenRole['_id']>
}