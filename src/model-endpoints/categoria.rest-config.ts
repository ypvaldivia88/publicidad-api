import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Categoria} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Categoria,
  pattern: 'CrudRest',
  dataSource: 'publicidad',
  basePath: '/categorias',
};
module.exports = config;
