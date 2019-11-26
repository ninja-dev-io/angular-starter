import {IEnvironment} from '../app/common/base/environment.interface';

export const Environment: IEnvironment = {
  type: 'TEST',
  protocol: 'https',
  ip: 'test.example.com',
  port: 443,
  version: 'v1'
};
