// lib/infrastructure/config/service-locator.ts
import constants from './constants';
import environment from './environment';
import JwtAccessTokenManager from '../security/JwtAccessTokenManager';
import UserSerializer from '../../interfaces/serializers/UserSerializer';
// import UserRepositoryInMemory from '../repositories/UserRepositoryInMemory';
// import UserRepositoryMongo from '../repositories/UserRepositoryMongo';
// import UserRepositorySQLite from '../repositories/UserRepositorySQLite';

export interface ServiceLocator {
  accessTokenManager: JwtAccessTokenManager;
  userSerializer: UserSerializer;
  userRepository: any;
}

export function buildBeans(): ServiceLocator {
  const beans: ServiceLocator = {
    accessTokenManager: new JwtAccessTokenManager(),
    userSerializer: new UserSerializer(),
    userRepository: {} as any
  };

  switch (environment.dialect) {
      case constants.SUPPORTED_DATABASE.POSTGRES:
      throw new Error('Add PostgreSQL support');
    default:
      throw new Error(`Unsupported dialect: ${environment.dialect}`);
  }
  return beans;
}
