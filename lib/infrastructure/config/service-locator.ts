import * as constants from './constants';
import environment from './environment';
import JwtAccessTokenManager from '../security/JwtAccessTokenManager';

// Importe de serializadores
import UserSerializer from '../../interfaces/serializers/auth/UserSerializer';
import RoleUserSerializer from '../../interfaces/serializers/auth/RoleUserSerializer';
import MixDocumentTypeSerializer from '../../interfaces/serializers/mix/DocumentTypeSerializer';
import ServicesServiceSerializer from '../../interfaces/serializers/services/ServiceSerializer';

// Import de repositorios
import AuthUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_repository_postgres';
import AuthRoleUserRepositoryPostgres from '../repositories/postgres/auth/auth_user_role_repository_postgres';
import MixDocumentTypeRepositoryPostgres from '../repositories/postgres/mix/mix_type_document_repository_postgres';
import ServicesServiceRepositoryPostgres from '../repositories/postgres/services/services_service_repository_postgres';

export interface ServiceLocator {
  accessTokenManager: JwtAccessTokenManager;
  // Repositories
  userRepository: any;
  roleUserRepository: any;
  documentTypeRepository: any;
  serviceRepository: any;
  // Serializers 
  userSerializer: UserSerializer;
  roleUserSerializer: RoleUserSerializer;
  documentTypeSerializer: MixDocumentTypeSerializer;
  serviceSerializer: ServicesServiceSerializer;
}

export function buildBeans(): ServiceLocator {
  return {
    accessTokenManager: new JwtAccessTokenManager(),

    // Repositories
    ...createRepositories(environment.dialect),

    // Serializers
    userSerializer: new UserSerializer(),
    roleUserSerializer: new RoleUserSerializer(),
    documentTypeSerializer: new MixDocumentTypeSerializer(),
    serviceSerializer: new ServicesServiceSerializer(),
  };
}

function createRepositories(dialect: string) {
  switch (dialect) {
    case constants.SUPPORTED_DATABASE.POSTGRES:
      return {
        userRepository: new AuthUserRepositoryPostgres(),
        roleUserRepository: new AuthRoleUserRepositoryPostgres(),
        documentTypeRepository: new MixDocumentTypeRepositoryPostgres(),
        serviceRepository: new ServicesServiceRepositoryPostgres(),
      };

    case constants.SUPPORTED_DATABASE.MONGO:
      throw new Error('MongoDB repositories not implemented yet');

    case constants.SUPPORTED_DATABASE.IN_MEMORY:
      throw new Error('In-memory repositories not implemented yet');

    default:
      throw new Error(`Unsupported database dialect: ${dialect}`);
  }
}