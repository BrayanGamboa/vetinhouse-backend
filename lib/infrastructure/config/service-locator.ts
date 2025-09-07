import * as constants from './constants';
import environment from './environment';
import JwtAccessTokenManager from '../security/JwtAccessTokenManager';

// Importe de serializadores
import UserSerializer from '../../interfaces/serializers/auth/UserSerializer';
import RoleUserSerializer from '../../interfaces/serializers/auth/RoleUserSerializer';
import MixDocumentTypeSerializer from '../../interfaces/serializers/mix/DocumentTypeSerializer';

// Import de repositorios
import AuthUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_repository_postgres';
import AuthRoleUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_role_repository_postgres';
import MixDocumentTypeRepositoryPostgres from '../repositories/postgres/mix/mix_type_document_repository_postgres';


export interface ServiceLocator {
  accessTokenManager: JwtAccessTokenManager;
  // Repositorios
  userRepository: any;
  roleUserRepository: any;
  documentTypeRepository: any;
  
  // Serializadores 
  userSerializer: UserSerializer;
  roleUserSerializer: RoleUserSerializer;
  documentTypeSerializer: MixDocumentTypeSerializer;
  
}

export function buildBeans(): ServiceLocator {
  const beans: ServiceLocator = {
    accessTokenManager: new JwtAccessTokenManager(),

    // Repositorios
    userRepository: new AuthUserRepositoryPostgres(),
    roleUserRepository: new AuthRoleUserRepositoryPostgres(),
    documentTypeRepository: new MixDocumentTypeRepositoryPostgres(),

    // Serializadores
    userSerializer: new UserSerializer(),
    roleUserSerializer: new RoleUserSerializer(),
    documentTypeSerializer: new MixDocumentTypeSerializer(),

  };

  // Selección del repositorio según dialecto
  if (environment.dialect === constants.SUPPORTED_DATABASE.MONGO) {
    // beans.userRepository = new AuthUserRepositoryMongo();
  } else if (environment.dialect === constants.SUPPORTED_DATABASE.POSTGRES) {
    beans.userRepository = new AuthUserRepositoryPostgres();
    beans.roleUserRepository = new AuthRoleUserRepositoryPostgres();
    beans.documentTypeRepository = new MixDocumentTypeRepositoryPostgres();


  } else {
    throw new Error(`Unsupported dialect: ${environment.dialect}`);
  }

  return beans;
}
