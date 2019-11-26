import {IEnvironment} from '../app/common/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'DEV',
  protocol: 'https',
  ip: 'dev.example.com',
  port: 443,
  version: 'v1'
};
