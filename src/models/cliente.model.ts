import {Entity, hasMany, model, property} from '@loopback/repository';
import {Publicidad} from './publicidad.model';

@model()
export class Cliente extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
  })
  telefono?: string;

  @property({
    type: 'string',
  })
  correo?: string;

  @property({
    type: 'string',
  })
  contrato?: string;

  @property({
    type: 'string',
  })
  direccion?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  persona: boolean;

  @hasMany(() => Publicidad)
  publicidades?: Publicidad[];

  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
