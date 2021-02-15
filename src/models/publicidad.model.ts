import {
  belongsTo,
  Entity,
  hasMany,
  model,
  property,
} from '@loopback/repository';
import {Categoria} from './categoria.model';
import {Cliente} from './cliente.model';

@model()
export class Publicidad extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  textoCorto?: string;

  @property({
    type: 'string',
  })
  textoLargo?: string;

  @property({
    type: 'string',
  })
  alcance?: string;

  @belongsTo(() => Cliente)
  clienteId: number;

  @hasMany(() => Categoria)
  categorias?: Categoria[];

  constructor(data?: Partial<Publicidad>) {
    super(data);
  }
}

export interface PublicidadRelations {
  // describe navigational properties here
}

export type PublicidadWithRelations = Publicidad & PublicidadRelations;
