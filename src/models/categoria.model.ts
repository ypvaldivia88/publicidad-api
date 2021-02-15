import {Entity, hasMany, model, property} from '@loopback/repository';
import {Publicidad} from './publicidad.model';

@model()
export class Categoria extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @hasMany(() => Publicidad)
  publicidades?: Publicidad[];

  constructor(data?: Partial<Categoria>) {
    super(data);
  }
}

export interface CategoriaRelations {
  // describe navigational properties here
}

export type CategoriaWithRelations = Categoria & CategoriaRelations;
