import { InfoResponse } from '../../../application/utilities/general_functions';

export default class User {
  document: string | null;
  name: string;
  lastName: string;
  email: string;
  password: string;
  documentTypeId: number;
  roleId: number;
  info: InfoResponse | null;

  constructor();
  constructor(
    document: string,
    name: string,
    lastName: string,
    email: string,
    password: string,
    documentTypeId: number,
    roleId: number,
    info: InfoResponse,
  );
  constructor(
    document?: string,
    name?: string,
    lastName?: string,
    email?: string,
    password?: string,
    documentTypeId?: number,
    roleId?: number,
    info?: InfoResponse,
  ) {
    this.document = document ?? null;
    this.name = name ?? '';
    this.lastName = lastName ?? '';
    this.email = email ?? '';
    this.password = password ?? '';
    this.documentTypeId = documentTypeId ?? 0;
    this.roleId = roleId ?? 0;
    this.info = info ?? null;
  }
};