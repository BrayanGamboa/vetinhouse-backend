import * as constants from './constants';
import environment from './environment';
import JwtAccessTokenManager from '../security/JwtAccessTokenManager';

// Importe de serializadores
import UserSerializer from '../../interfaces/serializers/auth/UserSerializer';
import RoleUserSerializer from '../../interfaces/serializers/auth/RoleUserSerializer';

// Import de repositorios
import AuthUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_repository_postgres';
import AuthRoleUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_role_repository_postgres';


export interface ServiceLocator {
  accessTokenManager: JwtAccessTokenManager;
  // Repositorios
  userRepository: any;
  roleUserRepository: any;
  
  // Serializadores 
  userSerializer: UserSerializer;
  roleUserSerializer: RoleUserSerializer;
  
}

export function buildBeans(): ServiceLocator {
  const beans: ServiceLocator = {
    accessTokenManager: new JwtAccessTokenManager(),

    // Repositorios
    userRepository: {} as any,
    roleUserRepository: {} as any,

    // Serializadores
    userSerializer: new UserSerializer(),
    roleUserSerializer: new RoleUserSerializer(),

  };

  // Selección del repositorio según dialecto
  if (environment.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    // beans.userRepository = new AuthUserRepositoryMongo();
  } else if (environment.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    beans.userRepository = new AuthUserRepositoryPostgres();
    beans.roleUserRepository = new AuthRoleUserRepositoryPostgres();
  } else {
    throw new Error(`Unsupported dialect: ${environment.dialect}`);
  }

  return beans;
}
