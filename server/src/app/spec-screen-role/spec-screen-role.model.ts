import { App } from '../app.model';
import { Entity } from 'typeorm';

@Entity()
export class SpecScreenRole extends App{
  children?: Array<SpecScreenRole>
  parent?: SpecScreenRole
}