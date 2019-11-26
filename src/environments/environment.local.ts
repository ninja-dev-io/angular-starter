import {IEnvironment} from '../app/common/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'LOCAL',
  protocol: 'http',
  ip: 'localhost',
  port: 8080,
  version: 'v1'
};
