// lib/infrastructure/config/service-locator.ts
import * as constants from './constants';
import environment from './environment';
import JwtAccessTokenManager from '../security/JwtAccessTokenManager';
import UserSerializer from '../../interfaces/serializers/UserSerializer';

// Import estáticos para repositorios
// import AuthUserRepositoryMongo from '../repositories/UserRepositoryMongo';
import AuthUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_repository_postgres';
// import UserRepositoryInMemory from '../repositories/UserRepositoryInMemory';
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

  // Selección del repositorio según dialecto
  if (environment.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    // beans.userRepository = new AuthUserRepositoryMongo();
  } else if (environment.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    beans.userRepository = new AuthUserRepositoryPostgres();
  } else {
    throw new Error(`Unsupported dialect: ${environment.dialect}`);
  }

  return beans;
}
