import {IEnvironment} from '../app/common/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'PROD',
  protocol: 'https',
  ip: 'example.com',
  port: 80,
  version: 'v1'
};

