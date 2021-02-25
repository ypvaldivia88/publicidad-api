import {ModelCrudRestApiConfig} from '@loopback/rest-crud';
import {Publicidad} from '../models';

const config: ModelCrudRestApiConfig = {
  model: Publicidad,
  pattern: 'CrudRest',
  dataSource: 'publicidad',
  basePath: '/publicidads',
};
module.exports = config;
